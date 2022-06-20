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

const IdentitasSekolah = () => {
  const [form] = Form.useForm();
  const [id, setId] = useState('');
  const [nm_sekolah, setSekolah] = useState('');
  const [npsn, setNpsn] = useState('');
  const [nss, setNss] = useState('');
  const [alamat, setAlamat] = useState('');
  const [pos, setPos] = useState('');
  const [telp, setTelp] = useState('');
  const [kel, setKel] = useState('');
  const [kec, setKec] = useState('');
  const [kab, setKab] = useState('');
  const [prov, setProv] = useState('');
  const [web, setWeb] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    Sekolah: nm_sekolah,
    Npsn: npsn,
    Nss: nss,
    Alamat: alamat,
    Pos: pos,
    Telp: telp,
    Kelurahan: kel,
    Kecamatan: kec,
    Kab_Kota: kab,
    Provinsi: prov,
    Website: web,
    Email: email
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/identitas/${id}`,{
          nm_sekolah: values.Sekolah,
          npsn: values.Npsn,
          nss: values.Nss,
          alamat: values.Alamat,
          pos: values.Pos,
          telp: values.Telp,
          kel: values.Kelurahan,
          kec: values.Kecamatan,
          kab: values.Kab_Kota,
          prov: values.Provinsi,
          web: values.Website,
          email: values.Email
      });

      history.push("/app/apps/identitas");
  };

  useEffect(() => {
      getIdentitas();
  }, []);

  const getIdentitas = async () => {
      const response = await axios.get(`http://localhost:5000/api/identitas/1`);
      const data = response.data
      setId(data.data.id)
      setSekolah(data.data.nm_sekolah)
      setNpsn(data.data.npsn)
      setNss(data.data.nss)
      setAlamat(data.data.almt_sekolah)
      setPos(data.data.kd_pos)
      setTelp(data.data.no_tlp)
      setKel(data.data.kelurahan)
      setKec(data.data.kecamatan)
      setKab(data.data.kab_kota)
      setProv(data.data.provinsi)
      setWeb(data.data.website)
      setEmail(data.data.email)
  }
 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="Sekolah" value={ nm_sekolah } label="Nama Sekolah" rules={[{ required: true }]}>
          <Input />
          </Form.Item>
          <Form.Item name="Npsn" value={ npsn } label="NPSN" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Nss" value={ nss } label="NSS" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Alamat" value={ alamat } label="Alamat Sekolah" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Pos" value={ pos } label="Kode Pos" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Telp" value={ telp } label="No Telpon" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Kelurahan" value={ kel } label="Kelurahan" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Kecamatan" value={ kec } label="Kecamatan" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Kab_Kota" value={ kab } label="Kabupaten / Kota" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Provinsi" value={ prov } label="Provinsi" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Website" value={ web } label="Website" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="Email" value={ email } label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="mr-2" type="primary" htmlType="submit">Update</Button>
            <Button className="mr-2" htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
      </Form>
  );
};

export class Identitas extends Component {
	render() {
		return (
    <div>
      <div className='code-box-form-demo'>
        <div className='basic'>
          <div className='code-box'>
            <section className='code-box-demo'>
              <IdentitasSekolah />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Identitas
