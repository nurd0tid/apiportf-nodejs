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

const EditAkademik = () => {
  const [form] = Form.useForm();
  const [kode, setKode] = useState('');
  const [nama, setNama] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    kd_thn: kode,
    nm_thn: nama,
    keterangan: keterangan,
    Status: status,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/akademik/${id}`,{
          kd_thn: values.kd_thn,
          nm_thn: values.nm_thn,
          keterangan: values.keterangan,
          status: values.Status,
      });

      history.push("/app/apps/tahun-akademik");
  };

  useEffect(() => {
      getAkademik();
  }, []);

  const getAkademik = async () => {
      const response = await axios.get(`http://localhost:5000/api/akademik/${id}`);
      const data = response.data
      setKode(data.data.kd_thn)
      setNama(data.data.nm_thn)
      setKeterangan(data.data.keterangan)
      setStatus(data.data.status)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="kd_thn" value={ kode } label="Kode Tahun Akademik" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name="nm_thn" value={ nama } label="Nama Tahun Akademik" rules={[{ required: true }]}>
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
              <EditAkademik />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
