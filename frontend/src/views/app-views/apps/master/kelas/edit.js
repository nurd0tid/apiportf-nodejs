import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditGedung = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [gurus, setGuru] = useState([]);
  const [jurusans, setJurusan] = useState([]);
  const [ruangans, setRuangan] = useState([]);

  const [kd_kelas, setKds] = useState('');
  const [nm_kelas, setNama] = useState('');
  const [nip, setNip] = useState('');
  const [kd_jurusan, setKdj] = useState('');
  const [kd_ruangan, setKdr] = useState('');
  const [jml_siswa, setJml] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    kd_kelas: kd_kelas,
    nm_kelas: nm_kelas,
    nip: nip,
    kd_jurusan: kd_jurusan,
    kd_ruangan: kd_ruangan,
    jml_siswa: jml_siswa
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/kelas/${id}`,{
          kd_kelas: values.kd_kelas,
          nm_kelas: values.nm_kelas,
          nip: values.nip,
          kd_jurusan: values.kd_jurusan,
          kd_ruangan: values.kd_ruangan,
          jml_siswa: values.jml_siswa,
      });

      history.push("/app/apps/kelas");
  };

  useEffect(() => {
      getGuru();
      getJurusan();
      getRuangan();
      getKelas();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGuru = async () => {
      const response = await axios.get('http://localhost:5000/api/guru');
      setGuru(response.data.data);
  }
  const getJurusan = async () => {
      const response = await axios.get('http://localhost:5000/api/jurusan');
      setJurusan(response.data.data);
  }
  const getRuangan = async () => {
      const response = await axios.get('http://localhost:5000/api/ruangan');
      setRuangan(response.data.data);
  }

  const getKelas = async () => {
      const response = await axios.get(`http://localhost:5000/api/kelas/${id}`);
      const data = response.data
      setKds(data.data.kd_kelas)
      setNama(data.data.nm_kelas)
      setNip(data.data.nip)
      setKdj(data.data.kd_jurusan)
      setKdr(data.data.kd_ruangan)
      setJml(data.data.jml_siswa)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="kd_kelas" value={ kd_kelas } label="Kode Kelas" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="nm_kelas" value={ nm_kelas } label="Nama Kelas" rules={[{ required: true }]}>
            <Input />
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

          <Form.Item name="jml_siswa" value={ jml_siswa } label="Jumlah Siswa" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="mr-2" type="primary" htmlType="submit">Update</Button>
            <Button className="mr-2" htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
      </Form>
  );
};

export class Edit extends Component {
	render() {
		return (
    <div>
      <div className='code-box-form-demo'>
        <div className='basic'>
          <div className='code-box'>
            <section className='code-box-demo'>
              <EditGedung />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
