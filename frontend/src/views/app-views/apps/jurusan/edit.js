import React, { Component } from 'react'
import { Form, Input, Button, Radio } from 'antd';
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

const EditJurusan = () => {
  const [form] = Form.useForm();
  const [singkatan, setSingkatan] = useState('');
  const [slug, setSlug] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    Singkatan: singkatan,
    Jurusan: slug,
    Status: status,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/jurusan/${id}`,{
          singkatan: values.Singkatan,
          slug: values.Jurusan,
          status: values.Status,
      });

      history.push("/app/apps/jurusan");
  };

  useEffect(() => {
      getJurusan();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJurusan = async () => {
      const response = await axios.get(`http://localhost:5000/api/jurusan/${id}`);
      const data = response.data
      setSlug(data.data.slug)
      setSingkatan(data.data.singkatan)
      setStatus(data.data.status)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="Singkatan" value={ singkatan } label="Singkatan" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="Jurusan" value={ slug }label="Jurusan" rules={[{ required: true }]}>
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
              <EditJurusan />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
