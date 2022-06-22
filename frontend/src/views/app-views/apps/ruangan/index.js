import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Tag, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Ruangan = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
      getPosts();
  }, []);

  const getPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/ruangan');
      setPost(response.data.data);
    }

  const deletePost = async (id) => {
      await axios.delete(`http://localhost:5000/api/ruangan/${id}`);
      getPosts();
  }
  

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      align: "center",
      width: 10
    },
    {
      title: "Kode Ruangan",
      dataIndex: "kd_ruangan",
      key: "kd_ruangan",
      align: "center",
      width: 20
    },
    {
      title: "Nama Gedung",
      dataIndex: "nm_gedung",
      key: "nm_gedung",
      align: "center",
      width: 120
    },
    {
      title: "Nama Ruangan",
      dataIndex: "nm_ruangan",
      key: "nm_ruangan",
      align: "center",
      width: 120
    },
    {
      title: "Kapasitas Belajar",
      dataIndex: "kps_belajar",
      key: "kps_belajar",
      align: "center",
      width: 120
    },
    {
      title: "Kapasitas Ujian",
      dataIndex: "kps_ujian",
      key: "kps_ujian",
      align: "center",
      width: 120
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
      width: 50,
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
      key: "kd_ruangan",
      dataIndex: "kd_ruangan",
      render: id => (
        <span>
          <a href={`/app/apps/ruangan-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/ruangan" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          kd_ruangan: post.kd_ruangan,
          nm_gedung: post.nm_gedung,
          nm_ruangan: post.nm_ruangan,
          kps_belajar: post.kps_belajar,
          kps_ujian: post.kps_ujian,
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
              <a href="/app/apps/ruangan-add">Add Ruangan</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Ruangan
