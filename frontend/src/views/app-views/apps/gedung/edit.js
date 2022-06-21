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

const EditGedung = () => {
  const [form] = Form.useForm();
  const [kd_gedung, setKode] = useState('');
  const [nm_gedung, setNama] = useState('');
  const [jml_lantai, setLantai] = useState('');
  const [panjang, setPanjang] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [lebar, setLebar] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    kd_gedung: kd_gedung,
    nm_gedung: nm_gedung,
    jml_lantai: jml_lantai,
    panjang: panjang,
    tinggi: tinggi,
    lebar: lebar,
    keterangan: keterangan,
    Status: status,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/gedung/${id}`,{
          kd_gedung: values.kd_gedung,
          nm_gedung: values.nm_gedung,
          jml_lantai: values.jml_lantai,
          panjang: values.panjang,
          tinggi: values.tinggi,
          lebar: values.lebar,
          keterangan: values.keterangan,
          status: values.Status,
      });

      history.push("/app/apps/gedung");
  };

  useEffect(() => {
      getGedung();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGedung = async () => {
      const response = await axios.get(`http://localhost:5000/api/gedung/${id}`);
      const data = response.data
      setKode(data.data.kd_gedung)
      setNama(data.data.nm_gedung)
      setLantai(data.data.jml_lantai)
      setPanjang(data.data.panjang)
      setTinggi(data.data.tinggi)
      setLebar(data.data.lebar)
      setKeterangan(data.data.keterangan)
      setStatus(data.data.status)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="kd_gedung" value={ kd_gedung } label="Kode Gedung" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name="nm_gedung" value={ nm_gedung } label="Nama Gedung" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name="jml_lantai" value={ jml_lantai } label="Jumlah Lantai" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name="panjang" value={ panjang } label="Panjang Gedung" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name="tinggi" value={ tinggi } label="Tinggi Gedung" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name="lebar" value={ lebar } label="Lebar Gedung" rules={[{ required: true }]}>
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
