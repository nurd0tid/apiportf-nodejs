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

const EditGolongan = () => {
  const [form] = Form.useForm();
  const [nm_golongan, setNama] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    nm_golongan: nm_golongan,
    keterangan: keterangan,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/golongan/${id}`,{
          nm_golongan: values.nm_golongan,
          keterangan: values.keterangan,
      });

      history.push("/app/apps/golongan");
  };

  useEffect(() => {
      getGolongan();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGolongan = async () => {
      const response = await axios.get(`http://localhost:5000/api/golongan/${id}`);
      const data = response.data
      setNama(data.nm_golongan)
      setKeterangan(data.keterangan)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="nm_golongan" value={ nm_golongan } label="Nama Golongan" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="keterangan" value={ keterangan } label="Keterangan" rules={[{ required: true }]}>
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
              <EditGolongan />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
