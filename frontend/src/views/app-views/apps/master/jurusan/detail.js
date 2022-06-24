import React from "react";
import { Descriptions, Tag, Button } from "antd";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const DetailJurusan = () => {
  const [kd_jurusan, setKode] = useState('');
  const [nm_jurusan, setNama] = useState('');
  const [bidang_keahlian, setBidang] = useState('');
  const [kptsi_umum, setUmum] = useState('');
  const [kptsi_khusus, setKhusus] = useState('');
  const [pejabat, setPejabat] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [status, setStatus] = useState('');
  const { id } = useParams();

  useEffect(() => {
      getJurusan();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJurusan = async () => {
      const response = await axios.get(`http://localhost:5000/api/jurusan/${id}`);
      const data = response.data
      setKode(data.data.kd_jurusan)
      setNama(data.data.nm_jurusan)
      setBidang(data.data.bidang_keahlian)
      setUmum(data.data.kptsi_umum)
      setKhusus(data.data.kptsi_khusus)
      setPejabat(data.data.pejabat)
      setJabatan(data.data.jabatan)
      setKeterangan(data.data.keterangan)
      setStatus(data.data.status)
  }
  
    return (
      <div className='code-box'>
          <div className='code-box-demo'>
            <Descriptions className="mb-3"
              title="Detail Data Jurusan"
              bordered
              column={{ xxl: 5, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Kode Jurusan">{ kd_jurusan }</Descriptions.Item>
              <Descriptions.Item label="Nama Jurusan" span={2}>{ nm_jurusan }</Descriptions.Item>
              <Descriptions.Item label="Pejabat">{ pejabat }</Descriptions.Item>
              <Descriptions.Item label="Jabatan" span={2}>{ jabatan }</Descriptions.Item>
              <Descriptions.Item label="Bidang Keahlian" span={3}>
                { bidang_keahlian }
              </Descriptions.Item>
              <Descriptions.Item label="Kompetensi Umum" span={3}>
                { kptsi_umum }
              </Descriptions.Item>
              <Descriptions.Item label="Kompetensi Khusus" span={3}>
                { kptsi_khusus }
              </Descriptions.Item>
              <Descriptions.Item label="Keterangan" span={3}>
                { keterangan }
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={3}>
                {(() => {
                  if ( status === 'active'){
                    return (
                        <Tag color="green" key={ status }>
                          { status.toUpperCase() }
                        </Tag>
                    )
                  }else if( status === 'nonactive'){
                    return (
                        <Tag color="volcano" key={ status }>
                          { status.toUpperCase() }
                        </Tag>
                    )
                  }
                })()}
              </Descriptions.Item>
            </Descriptions>
            <Button type="dashed"><a href="/app/apps/jurusan">Kembali</a></Button>
          </div>
      </div>
    );
}

export default DetailJurusan;
