import React from "react";
import { Descriptions, Tag, Button } from "antd";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const DetailMapel = () => {
  const [nm_kurikulum, setKurikulum] = useState('');
  const [kd_mapel, setKode] = useState('');
  const [nm_mapel, setMapel] = useState('');
  const [nm_jurusan, setJurusan] = useState('');
  const [nm_guru, setGuru] = useState('');
  const [tingkat, setTingkat] = useState('');
  const [kptsi_umum, setKptsiu] = useState('');
  const [kptsi_khusus, setKptsik] = useState('');
  const [jml_jam, setJam] = useState('');
  const [nm_kmapel, setKmapel] = useState('');
  const [status, setStatus] = useState('');
  const { id } = useParams();

  useEffect(() => {
      getMapel();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMapel = async () => {
      const response = await axios.get(`http://localhost:5000/api/mapel/${id}`);
      const data = response.data
      setKurikulum(data.data.nm_kurikulum)
      setKode(data.data.kd_mapel)
      setMapel(data.data.nm_mapel)
      setJurusan(data.data.nm_jurusan)
      setGuru(data.data.nm_guru)
      setTingkat(data.data.tingkat)
      setKptsiu(data.data.kptsi_umum)
      setKptsik(data.data.kptsi_khusus)
      setJam(data.data.jml_jam)
      setKmapel(data.data.nm_kmapel)
      setStatus(data.data.status)
  }
  
    return (
      <div className='code-box'>
          <div className='code-box-demo'>
            <Descriptions className="mb-3"
              title="Detail Data Mapel"
              bordered
              column={{ xxl: 5, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Kurikulum">{ nm_kurikulum }</Descriptions.Item>
              <Descriptions.Item label="Kode Mapel" span={1}>{ kd_mapel }</Descriptions.Item>
              <Descriptions.Item label="Nama Mapel">{ nm_mapel }</Descriptions.Item>
              <Descriptions.Item label="Nama Guru" span={1}>{ nm_guru }</Descriptions.Item>
              <Descriptions.Item label="Nama Jurusan">{ nm_jurusan }</Descriptions.Item>
              <Descriptions.Item label="Tingkat">{ tingkat }</Descriptions.Item>
              <Descriptions.Item label="Kompetensi Umum" span={3}>
                { kptsi_umum }
              </Descriptions.Item>
              <Descriptions.Item label="Kompetensi Khusus" span={3}>
                { kptsi_khusus }
              </Descriptions.Item>
              <Descriptions.Item label="Jumlah Jam" span={3}>
                { jml_jam }
              </Descriptions.Item>
              <Descriptions.Item label="Kelompok Mapel" span={3}>
                { nm_kmapel }
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
            <Button type="dashed"><a href="/app/apps/mapel">Kembali</a></Button>
          </div>
      </div>
    );
}

export default DetailMapel;
