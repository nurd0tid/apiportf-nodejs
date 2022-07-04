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

const EditPtk = () => {
  const [form] = Form.useForm();
  const [nm_ptk, setNama] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    nm_ptk: nm_ptk,
    keterangan: keterangan,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/ptk/${id}`,{
          nm_ptk: values.nm_ptk,
          keterangan: values.keterangan,
      });

      history.push("/app/apps/ptk");
  };

  useEffect(() => {
      getPtk();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPtk = async () => {
      const response = await axios.get(`http://localhost:5000/api/ptk/${id}`);
      const data = response.data
      setNama(data.nm_ptk)
      setKeterangan(data.keterangan)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="nm_ptk" value={ nm_ptk } label="Nama PTK" rules={[{ required: true }]}>
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
              <EditPtk />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
