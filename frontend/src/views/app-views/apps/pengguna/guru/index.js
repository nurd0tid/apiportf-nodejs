import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
  EyeTwoTone
} from '@ant-design/icons';


const Guru = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getPosts();
}, []);

const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/guru');
    setPost(response.data.data);
  }

const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/guru/${id}`);
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
      title: "NIP",
      dataIndex: "nip",
      key: "nip",
      align: "center",
      width:50
    },
    {
      title: "Nama Lengkap",
      dataIndex: "nm_guru",
      key: "nm_guru",
      align: "center",
      width: 200
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenis_kelamin",
      key: "jenis_kelamin",
      align: "center",
      width: 80,
    },
    {
      title: "No Telepon",
      dataIndex: "telepon",
      key: "telepon",
      align: "center",
      width: 80
    },
    {
      title: "Status Pegawai",
      dataIndex: "stts_kepegawaian",
      key: "stts_kepegawaian",
      align: "center",
      width: 80
    },
    {
      title: "Jenis PTK",
      dataIndex: "nm_ptk",
      key: "nm_ptk",
      align: "center",
      width: 150
    },
    {
      title: "Action",
      key: "nip",
      dataIndex: "nip",
      render: id => (
        <span>
          <a href={`/app/apps/guru-detail/${id}`}><EyeTwoTone twoToneColor="#52c41a" /></a>
          <Divider type="vertical" />
          <a href={`/app/apps/guru-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/guru" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          nip: post.nip,
          nm_guru: post.nm_guru,
          jenis_kelamin: post.jenis_kelamin,
          telepon: post.telepon,
          stts_kepegawaian: post.stts_kepegawaian,
          nm_ptk: post.nm_ptk,
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/guru-add">Add Guru</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '25', '100']}} bordered/>
        </div>
      </div>
    );
}

export default Guru
