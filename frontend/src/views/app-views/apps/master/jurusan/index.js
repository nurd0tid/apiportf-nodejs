import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
  EyeTwoTone
} from '@ant-design/icons';


const Jurusan = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getPosts();
}, []);

const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/jurusan');
    setPost(response.data);
  }

const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/jurusan/${id}`);
    getPosts();
}
 

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      align: "center",
      width: 5
    },
    {
      title: "Kode Jurusan",
      dataIndex: "kd_jurusan",
      key: "kd_jurusan",
      align: "center",
      width:50
    },
    {
      title: "Nama Jurusan",
      dataIndex: "nm_jurusan",
      key: "nm_jurusan",
      align: "center",
      width: 150
    },
    {
      title: "Bidang Keahlian",
      dataIndex: "bidang_keahlian",
      key: "bidang_keahlian",
      align: "center",
      width: 380,
    },
    {
      title: "Kompetensi Umum",
      dataIndex: "kptsi_umum",
      key: "kptsi_umum",
      align: "center",
      width: 150
    },
    {
      title: "Kompetensi Khusus",
      dataIndex: "kptsi_khusus",
      key: "kptsi_khusus",
      align: "center",
      width: 150
    },
    {
      title: "Action",
      key: "id_jurusan",
      dataIndex: "id_jurusan",
      render: id => (
        <span>
          <a href={`/app/apps/jurusan-detail/${id}`}><EyeTwoTone twoToneColor="#52c41a" /></a>
          <Divider type="vertical" />
          <a href={`/app/apps/jurusan-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/jurusan" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          id_jurusan: post.id_jurusan,
          kd_jurusan: post.kd_jurusan,
          nm_jurusan: post.nm_jurusan,
          bidang_keahlian: post.bidang_keahlian,
          kptsi_umum: post.kptsi_umum,
          kptsi_khusus: post.kptsi_khusus,
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/jurusan-add">Add Jurusan</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Jurusan
