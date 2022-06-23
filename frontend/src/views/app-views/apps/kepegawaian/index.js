
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Kepegawaian = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    getPosts();
}, []);

const getPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/kepegawaian');
    setPost(response.data.data);
  }

const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/api/kepegawaian/${id}`);
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
      title: "Status Kepegawaian",
      dataIndex: "stts_kepegawaian",
      key: "stts_kepegawaian",
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
      key: "id_kepegawaian",
      dataIndex: "id_kepegawaian",
      render: id => (
        <span>
          <a href={`/app/apps/kepegawaian-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/kepegawaian" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          id_kepegawaian: post.id_kepegawaian,
          stts_kepegawaian: post.stts_kepegawaian,
          keterangan: post.keterangan
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/kepegawaian-add">Add Kepegawaian</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={false} bordered/>
        </div>
      </div>
    );
}

export default Kepegawaian
