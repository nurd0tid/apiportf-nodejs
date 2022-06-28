import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button, Avatar } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
  EyeTwoTone
} from '@ant-design/icons';


const Guru = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getGuru();
}, []);

const getGuru = async () => {
    const response = await axios.get('http://localhost:5000/api/guru');
    setPost(response.data.data);
  }

const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/guru/${id}`);
    getGuru();
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
      title: "Photo",
      key: "photo",
      dataIndex: "photo",
      render: photo => (
        <div>
          <Avatar src={"http://localhost:5000/photo_guru/" + photo } shape="square" size={64} />
        </div>
      ),
      align: "center"
    },
    {
      title: "NIP",
      dataIndex: "nip",
      key: "nip",
      align: "center",
    },
    {
      title: "Nama Lengkap",
      dataIndex: "nm_guru",
      key: "nm_guru",
      align: "center",
    },
    {
      title: "No. Handphone",
      dataIndex: "no_hp",
      key: "no_hp",
      align: "center",
    },
    {
      title: "Status Pegawai",
      dataIndex: "stts_kepegawaian",
      key: "stts_kepegawaian",
      align: "center",
    },
    {
      title: "Jenis PTK",
      dataIndex: "nm_ptk",
      key: "nm_ptk",
      align: "center",
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
          photo: post.photo,
          nm_guru: post.nm_guru,
          no_hp: post.no_hp,
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
