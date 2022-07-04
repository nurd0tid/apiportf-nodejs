import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Tag, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Gedung = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
      getPosts();
  }, []);

  const getPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/gedung');
      setPost(response.data);
    }

  const deletePost = async (id) => {
      await axios.delete(`http://localhost:5000/api/gedung/${id}`);
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
      title: "Kode Gedung",
      dataIndex: "kd_gedung",
      key: "kd_gedung",
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
      title: "Jumlah Lantai",
      dataIndex: "jml_lantai",
      key: "jml_lantai",
      align: "center",
      width: 120
    },
    {
      title: "Panjang",
      dataIndex: "panjang",
      key: "panjang",
      align: "center"
    },
    {
      title: "Tinggi",
      dataIndex: "tinggi",
      key: "tinggi",
      align: "center"
    },
    {
      title: "Lebar",
      dataIndex: "lebar",
      key: "lebar",
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
      key: "id_gedung",
      dataIndex: "id_gedung",
      render: id => (
        <span>
          <a href={`/app/apps/gedung-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/gedung" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          id_gedung: post.id_gedung,
          kd_gedung: post.kd_gedung,
          nm_gedung: post.nm_gedung,
          jml_lantai: post.jml_lantai,
          panjang: post.panjang,
          tinggi: post.tinggi,
          lebar: post.lebar,
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
              <a href="/app/apps/gedung-add">Add Gedung</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Gedung
