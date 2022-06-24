
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Golongan = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getPosts();
}, []);

const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/golongan');
    setPost(response.data.data);
  }

const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/golongan/${id}`);
    getPosts();
}
 

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      align: "center",
      width: 20
    },
    {
      title: "Nama Golongan",
      dataIndex: "nm_golongan",
      key: "nm_golongan",
      align: "center"
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "center"
    },
    {
      title: "Action",
      key: "id_golongan",
      dataIndex: "id_golongan",
      render: id => (
        <span>
          <a href={`/app/apps/golongan-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/golongan" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          id_golongan: post.id_golongan,
          nm_golongan: post.nm_golongan,
          keterangan: post.keterangan
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/golongan-add">Add Golongan</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Golongan
