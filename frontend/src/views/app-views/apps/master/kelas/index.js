import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Divider, Button } from "antd";
import { 
  EditTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';


const Kelas = () => {

  const [posts, setPost] = useState([]);

  useEffect(() => {
      getPosts();
  }, []);

  const getPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/kelas');
      setPost(response.data);
    }

  const deletePost = async (id) => {
      await axios.delete(`http://localhost:5000/api/kelas/${id}`);
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
      title: "Kode Kelas",
      dataIndex: "kd_kelas",
      key: "kd_kelas",
      align: "center",
    },
    {
      title: "Nama Kelas",
      dataIndex: "nm_kelas",
      key: "nm_kelas",
      align: "center",
    },
    {
      title: "Wali Kelas",
      dataIndex: "nm_guru",
      key: "nm_guru",
      align: "center",
    },
    {
      title: "Jurusan",
      dataIndex: "nm_jurusan",
      key: "nm_jurusan",
      align: "center",
    },
    {
      title: "Ruangan",
      dataIndex: "nm_ruangan",
      key: "nm_ruangan",
      align: "center",
    },
    {
      title: "Gedung",
      dataIndex: "nm_gedung",
      key: "nm_gedung",
      align: "center",
    },
    {
      title: "Jumlah Siswa",
      dataIndex: "jml_siswa",
      key: "jml_siswa",
      align: "center",
    },
    {
      title: "Action",
      key: "kd_kelas",
      dataIndex: "kd_kelas",
      render: id => (
        <span>
          <a href={`/app/apps/kelas-edit/${id}`}><EditTwoTone /></a>
          <Divider type="vertical" />
          <a href="/app/apps/kelas" onClick={ () => deletePost(id) } ><DeleteTwoTone twoToneColor="#eb2f96" /></a>
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
          kd_kelas: post.kd_kelas,
          nm_kelas: post.nm_kelas,
          nm_guru: post.guru.nm_guru,
          nm_jurusan: post.jurusan.nm_jurusan,
          nm_ruangan: post.ruangan.nm_ruangan,
          nm_gedung: post.nm_gedung,
          jml_siswa: post.jml_siswa
        })
      ));
  }

    return (
      <div className='code-box'>
        <div className='code-box-demo'>
          <div style={{ marginBottom: 16 }}>
            <Button type="primary">
              <a href="/app/apps/kelas-add">Add Kelas</a>
            </Button>
          </div>
          <Table columns={columns} dataSource={dataAPI} 
          pagination={{ 
            defaultPageSize: 5, 
            showSizeChanger: true, 
            pageSizeOptions: ['5', '10', '25', '100']}} bordered/>
        </div>
      </div>
    );
}

export default Kelas
