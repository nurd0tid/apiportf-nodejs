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
  const [kd_jurusan, setKode] = useState('');
  const [nm_jurusan, setNama] = useState('');
  const [bidang_keahlian, setBidang] = useState('');
  const [kptsi_umum, setUmum] = useState('');
  const [kptsi_khusus, setKhusus] = useState('');
  const [pejabat, setPejabat] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    kd_jurusan: kd_jurusan,
    nm_jurusan: nm_jurusan,
    bidang_keahlian: bidang_keahlian,
    kptsi_umum: kptsi_umum,
    kptsi_khusus: kptsi_khusus,
    pejabat: pejabat,
    jabatan: jabatan,
    keterangan: keterangan,
    status: status,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/jurusan/${id}`,{
          kd_jurusan: values.kd_jurusan,
          nm_jurusan: values.nm_jurusan,
          bidang_keahlian: values.bidang_keahlian,
          kptsi_umum: values.kptsi_umum,
          kptsi_khusus: values.kptsi_khusus,
          pejabat: values.pejabat,
          jabatan: values.jabatan,
          keterangan: values.keterangan,
          status: values.status,
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
      setKode(data.kd_jurusan)
      setNama(data.nm_jurusan)
      setBidang(data.bidang_keahlian)
      setUmum(data.kptsi_umum)
      setKhusus(data.kptsi_khusus)
      setPejabat(data.pejabat)
      setJabatan(data.jabatan)
      setKeterangan(data.keterangan)
      setStatus(data.status)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="kd_jurusan" value={ kd_jurusan } label="Kode Jurusan" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="nm_jurusan" value={ nm_jurusan }label="Nama Jurusan" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="bidang_keahlian" value={ bidang_keahlian } label="Bidang Keahlian" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="kptsi_umum" value={ kptsi_umum } label="Kompetensi Umum" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="kptsi_khusus" value={ kptsi_khusus } label="Kompetensi Khusus" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="pejabat" value={ pejabat } label="Pejabat" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="jabatan" value={ jabatan } label="Jabatan" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="keterangan" value={ keterangan } label="Keterangan" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="status" label="Status" rules={[{ required: true }]} >
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
