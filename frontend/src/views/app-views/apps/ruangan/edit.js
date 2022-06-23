import React, { Component } from 'react'
import { Form, Input, Button, Radio, Select } from 'antd';
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
  const [posts, setPost] = useState([]);
  const [kd_ruangan, setKode] = useState('');
  const [kd_gedung, setKodeG] = useState('');
  const [nm_ruangan, setNama] = useState('');
  const [kps_belajar, setBelajar] = useState('');
  const [kps_ujian, setUjian] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    kd_ruangan: kd_ruangan,
    kd_gedung: kd_gedung,
    nm_ruangan: nm_ruangan,
    kps_belajar: kps_belajar,
    kps_ujian: kps_ujian,
    keterangan: keterangan,
    Status: status,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/ruangan/${id}`,{
          kd_ruangan: values.kd_ruangan,
          kd_gedung: values.kd_gedung,
          nm_ruangan: values.nm_ruangan,
          kps_belajar: values.kps_belajar,
          kps_ujian: values.kps_ujian,
          keterangan: values.keterangan,
          status: values.Status,
      });

      history.push("/app/apps/ruangan");
  };

  useEffect(() => {
      getRuangan();
      getPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/gedung');
      setPost(response.data.data);
  }

  const getRuangan = async () => {
      const response = await axios.get(`http://localhost:5000/api/ruangan/${id}`);
      const data = response.data
      setKode(data.data.kd_ruangan)
      setKodeG(data.data.kd_gedung)
      setNama(data.data.nm_ruangan)
      setBelajar(data.data.kps_belajar)
      setUjian(data.data.kps_ujian)
      setKeterangan(data.data.keterangan)
      setStatus(data.data.status)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="kd_ruangan" value={ kd_ruangan } label="Kode Ruangan" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="kd_gedung" label="Nama Gedung" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              // onChange={onGenderChange}
              allowClear
            >
              <option valie="">-- Pilih Gedung --</option>
              { posts.map((post) => (
              <Option value={ post.kd_gedung }>{ post.nm_gedung }</Option>
              )) }
          </Select>
          </Form.Item>
          <Form.Item name="nm_ruangan" value={ nm_ruangan } label="Nama Ruangan" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="kps_belajar" value={ kps_belajar } label="Kapasitas Belajar" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="kps_ujian" value={ kps_ujian } label="Kapasitas Ujian" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="keterangan" value={ keterangan } label="Keterangan" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Status" label="Status" rules={[{ required: true }]} >
            <Radio.Group>
              <Radio value="active" checked={ status === 'active' ? "checked" : ""}>Active</Radio>
              <Radio value="nonactive" checked={ status === 'nonactive' ? "checked" : ""}>Non Active</Radio>
            </Radio.Group>
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
