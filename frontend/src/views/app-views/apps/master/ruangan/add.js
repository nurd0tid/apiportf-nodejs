import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { Form, Input, Button, Radio, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddRuangan = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const history = useHistory();
  const [posts, setPost] = useState([]);

  useEffect(() => {
      getPosts();
  }, []);

  const getPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/gedung');
      setPost(response.data);
  }

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/ruangan',{
          kd_ruangan: values.kd_ruangan,
          kd_gedung: values.kd_gedung,
          nm_ruangan: values.nm_ruangan,
          kps_belajar: values.kps_belajar,
          kps_ujian: values.kps_ujian,
          keterangan: values.keterangan,
          status: values.status,
      });

      history.push("/app/apps/ruangan");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="kd_ruangan" label="Kode Ruangan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="kd_gedung" label="Nama Gedung" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Gedung --</option>
              { posts.map((post) => (
              <Option value={ post.kd_gedung }>{ post.nm_gedung }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="nm_ruangan" label="Nama Ruangan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="kps_belajar" label="Kapasitas Belajar" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="kps_ujian" label="Kapastitas Ujian" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="keterangan" label="Keterangan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="status" label="Status Gedung" rules={[{ required: true }]} >
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
              <AddRuangan />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
