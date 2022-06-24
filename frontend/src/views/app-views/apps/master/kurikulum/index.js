import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Tag, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Kurikulum = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getPosts();
}, []);

const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/kurikulum');
    setPost(response.data.data);
  }

const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/kurikulum/${id}`);
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
      title: "Nama Kurikulum",
      dataIndex: "nm_kurikulum",
      key: "nm_kurikulum",
      align: "center"
    },
    {
      title: "Status Kurikulum",
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
      key: "id_kurikulum",
      dataIndex: "id_kurikulum",
      render: id => (
        <span>
          <a href={`/app/apps/kurikulum-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/kurikulum" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          id_kurikulum: post.id_kurikulum,
          nm_kurikulum: post.nm_kurikulum,
          status: [ post.status ],
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/kurikulum-add">Add Kurikulum</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Kurikulum
