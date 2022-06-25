import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
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

const EditKmapel = () => {
  const [form] = Form.useForm();
  const [jenis_kmapel, setJenis] = useState('');
  const [nm_kmapel, setNama] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    jenis_kmapel: jenis_kmapel,
    nm_kmapel: nm_kmapel,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/kmapel/${id}`,{
          jenis_kmapel: values.jenis_kmapel,
          nm_kmapel: values.nm_kmapel,
      });

      history.push("/app/apps/kmapel");
  };

  useEffect(() => {
      getKmapel();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKmapel = async () => {
      const response = await axios.get(`http://localhost:5000/api/kmapel/${id}`);
      const data = response.data
      setJenis(data.data.jenis_kmapel)
      setNama(data.data.nm_kmapel)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="jenis_kmapel" value={ jenis_kmapel } label="Jenis Kelompok" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="nm_kmapel" value={ nm_kmapel } label="Nama Kelompok" rules={[{ required: true }]}>
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
              <EditKmapel />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
