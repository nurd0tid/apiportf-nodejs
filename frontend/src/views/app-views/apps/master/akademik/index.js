import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Tag, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Akademik = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
      getPosts();
  }, []);

  const getPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/akademik');
      setPost(response.data.data);
    }

  const deletePost = async (id) => {
      await axios.delete(`http://localhost:5000/api/akademik/${id}`);
      getPosts();
  }
  

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      align: "center"
    },
    {
      title: "Kode Tahun Akademik",
      dataIndex: "kd_thn",
      key: "kd_thn",
      align: "center"
    },
    {
      title: "Nama Tahun Akademik",
      dataIndex: "nm_thn",
      key: "nm_thn",
      align: "center"
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center"
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: status => (
        <span>
          {status.map(a => {
            let color = a ? "geekblue" : "green";
            if (a === "active") {
              color = "green";
            }else if (a === "nonactive") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={a}>
                {a.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      align: "center"
    },
    {
      title: "Action",
      key: "id_akademik",
      dataIndex: "id_akademik",
      render: id => (
        <span>
          <a href={`/app/apps/tahun-akademik-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/tahun-akademik" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
        </span>
      ),
      align: "center"
    }
  ];

  const dataAPI = [];
  // eslint-disable-next-line no-lone-blocks
  { 
    posts.map((post, index) => (
        dataAPI.push({
          key: index + 1,
          id_akademik: post.id_akademik,
          kd_thn: post.kd_thn,
          nm_thn: post.nm_thn,
          keterangan: post.keterangan,
          status: [ post.status ],
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/tahun-akademik-add">Add Tahun Akademik</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Akademik
