import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Tag, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Jurusan = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getPosts();
}, []);

const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/jurusan');
    setPost(response.data.data);
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
      align: "center"
    },
    {
      title: "Singkatan",
      dataIndex: "singkatan",
      key: "singkatan",
      align: "center"
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
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
      key: "id_jurusan",
      dataIndex: "id_jurusan",
      render: id => (
        <span>
          <a href={`/app/apps/jurusan-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/jurusan" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
        </span>
      ),
      align: "center"
    }
  ];

  const dataAPI = [];
  { 
    posts.map((post, index) => (
        dataAPI.push({
          key: index + 1,
          id_jurusan: post.id_jurusan,
          singkatan: post.singkatan,
          slug: post.slug,
          status: [ post.status ],
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
