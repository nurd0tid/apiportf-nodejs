
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Kmapel = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getPosts();
}, []);

const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/kmapel');
    setPost(response.data);
  }

const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/kmapel/${id}`);
    getPosts();
}
 

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      align: "center",
    },
    {
      title: "Jenis",
      dataIndex: "jenis_kmapel",
      key: "jenis_kmapel",
      align: "center"
    },
    {
      title: "Nama Kelompok",
      dataIndex: "nm_kmapel",
      key: "nm_kmapel",
      align: "center"
    },
    {
      title: "Action",
      key: "id_kmapel",
      dataIndex: "id_kmapel",
      render: id => (
        <span>
          <a href={`/app/apps/kmapel-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/kmapel" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          id_kmapel: post.id_kmapel,
          jenis_kmapel: post.jenis_kmapel,
          nm_kmapel: post.nm_kmapel
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/kmapel-add">Add Kelompok Mapel</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Kmapel
