import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddMapel = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const history = useHistory();
  const [kurikulums, setKurikulum] = useState([]);
  const [gurus, setGuru] = useState([]);
  const [jurusans, setJurusan] = useState([]);
  const [kmapels, setKmapel] = useState([]);

  useEffect(() => {
      getKurikulum();
      getGuru();
      getJurusan();
      getKmapel();
  }, []);

  const getKurikulum = async () => {
      const response = await axios.get('http://localhost:5000/api/kurikulum');
      setKurikulum(response.data);
  }
  const getGuru = async () => {
      const response = await axios.get('http://localhost:5000/api/guru');
      setGuru(response.data);
  }
  const getJurusan = async () => {
      const response = await axios.get('http://localhost:5000/api/jurusan');
      setJurusan(response.data);
  }
  const getKmapel = async () => {
      const response = await axios.get('http://localhost:5000/api/kmapel');
      setKmapel(response.data);
  }

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/mapel',{
          id_kurikulum: values.id_kurikulum,
          kd_mapel: values.kd_mapel,
          nm_mapel: values.nm_mapel,
          kd_jurusan: values.kd_jurusan,
          nip: values.nip,
          tingkat: values.tingkat,
          kptsi_umum: values.kptsi_umum,
          kptsi_khusus: values.kptsi_khusus,
          jml_jam: values.jml_jam,
          id_kmapel: values.id_kmapel,
      });

      history.push("/app/apps/mapel");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="id_kurikulum" label="Kurikulum" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Kurikulum --</option>
              { kurikulums.map((kurikulum) => (
              <Option value={ kurikulum.id_kurikulum }>{ kurikulum.nm_kurikulum }</Option>
              )) }
          </Select>
          </Form.Item>
          
          <Form.Item name="kd_mapel" label="Kode Mapel" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="nm_mapel" label="Nama Mapel" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="kd_jurusan" label="Jurusan" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Jurusan --</option>
              { jurusans.map((jurusan) => (
              <Option value={ jurusan.kd_jurusan }>{ jurusan.nm_jurusan }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="nip" label="Guru Pengampu" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Guru Pengampu --</option>
              { gurus.map((guru) => (
              <Option value={ guru.nip }>{ guru.nm_guru }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="tingkat" label="Tingkat" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="kptsi_umum" label="Kompetensi Umum" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="kptsi_khusus" label="Kompetensi Khusus" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="jml_jam" label="Jumlah Jam" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="id_kmapel" label="Kelompok Mata Pelajaran" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Kelompok Mata Pelajaran --</option>
              { kmapels.map((kmapel) => (
              <Option value={ kmapel.id_kmapel }>{ kmapel.nm_kmapel }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="status" label="Status" rules={[{ required: true }]} >
            <Radio.Group>
              <Radio value="active">Active</Radio>
              <Radio value="nonactive">Non Active</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="mr-2" type="primary" htmlType="submit">Submit</Button>
            <Button className="mr-2" htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
      </Form>
  );
};

export class Add extends Component {
	render() {
		return (
    <div>
      <div className='code-box-form-demo'>
        <div className='basic'>
          <div className='code-box'>
            <section className='code-box-demo'>
              <AddMapel />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
