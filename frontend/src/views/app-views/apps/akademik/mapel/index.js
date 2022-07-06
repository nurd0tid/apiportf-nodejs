import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button, Tag } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
  EyeTwoTone
} from '@ant-design/icons';


const Mapel = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
      getPosts();
  }, []);

  const getPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/mapel');
      setPost(response.data);
    }

  const deletePost = async (id) => {
      await axios.delete(`http://localhost:5000/api/mapel/${id}`);
      getPosts();
  }
  

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      align: "center",
      width: 5
    },
    {
      title: "Kode Mapel",
      dataIndex: "kd_mapel",
      key: "kd_mapel",
      align: "center",
    },
    {
      title: "Nama Mapel",
      dataIndex: "nm_mapel",
      key: "nm_mapel",
      align: "center",
    },
    {
      title: "Jurusan",
      dataIndex: "nm_jurusan",
      key: "nm_jurusan",
      align: "center",
    },
    {
      title: "Tingkat",
      dataIndex: "tingkat",
      key: "tingkat",
      align: "center",
    },
    {
      title: "Guru Pengampu",
      dataIndex: "nm_guru",
      key: "nm_guru",
      align: "center",
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
      key: "kd_mapel",
      dataIndex: "kd_mapel",
      render: id => (
        <span>
          <a href={`/app/apps/mapel-detail/${id}`}><EyeTwoTone twoToneColor="#52c41a"/></a>
          <Divider type="vertical" />
          <a href={`/app/apps/mapel-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/mapel" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          kd_mapel: post.kd_mapel,
          nm_mapel: post.nm_mapel,
          nm_jurusan: post.nm_jurusan,
          tingkat: post.tingkat,
          nm_guru: post.nm_guru,
          status: [ post.status ]
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/mapel-add">Add Matapelajaran</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '25', '100']}} bordered/>
        </div>
      </div>
    );
}

export default Mapel
