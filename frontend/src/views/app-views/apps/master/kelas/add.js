import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddKelas = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const history = useHistory();
  const [gurus, setGuru] = useState([]);
  const [jurusans, setJurusan] = useState([]);
  const [ruangans, setRuangan] = useState([]);

  useEffect(() => {
      getGuru();
      getJurusan();
      getRuangan();
  }, []);

  const getGuru = async () => {
      const response = await axios.get('http://localhost:5000/api/guru');
      setGuru(response.data);
  }
  const getJurusan = async () => {
      const response = await axios.get('http://localhost:5000/api/jurusan');
      setJurusan(response.data);
  }
  const getRuangan = async () => {
      const response = await axios.get('http://localhost:5000/api/ruangan');
      setRuangan(response.data);
  }

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/kelas',{
          kd_kelas: values.kd_kelas,
          nm_kelas: values.nm_kelas,
          nip: values.nip,
          kd_jurusan: values.kd_jurusan,
          kd_ruangan: values.kd_ruangan,
          jml_siswa: values.jml_siswa,
      });

      history.push("/app/apps/kelas");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="kd_kelas" label="Kode Kelas" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="nm_kelas" label="Nama Kelas" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="nip" label="Wali Kelas" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Wali Kelas --</option>
              { gurus.map((guru) => (
              <Option value={ guru.nip }>{ guru.nm_guru }</Option>
              )) }
          </Select>
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

          <Form.Item name="kd_ruangan" label="Ruangan" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Ruangan --</option>
              { ruangans.map((ruangan) => (
              <Option value={ ruangan.kd_ruangan }>{ ruangan.nm_ruangan }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="jml_siswa" label="Jumlah Siswa" rules={[{ required: true }]}>
          <Input/>
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
              <AddKelas />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
