import React, { Component } from 'react'
import { Form, Input, Button, Select, Radio } from 'antd';
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

const EditMapel = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [kurikulums, setKurikulum] = useState([]);
  const [jurusans, setJurusan] = useState([]);
  const [gurus, setGuru] = useState([]);
  const [kmapels, setKmapel] = useState([]);

  const [id_kurikulum, setId] = useState('');
  const [kd_mapel, setKdm] = useState('');
  const [nm_mapel, setNama] = useState('');
  const [kd_jurusan, setKds] = useState('');
  const [nip, setNip] = useState('');
  const [tingkat, setTingkat] = useState('');
  const [kptsi_umum, setKptsiu] = useState('');
  const [kptsi_khusus, setKptsik] = useState('');
  const [jml_jam, setJam] = useState('');
  const [id_kmapel, setIdk] = useState('');
  const [status, setStatus] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    id_kurikulum: id_kurikulum,
    kd_mapel: kd_mapel,
    nm_mapel: nm_mapel,
    kd_jurusan: kd_jurusan,
    nip: nip,
    tingkat: tingkat,
    kptsi_umum: kptsi_umum,
    kptsi_khusus: kptsi_khusus,
    jml_jam: jml_jam,
    id_kmapel: id_kmapel,
    status: status
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/mapel/${id}`,{
          id_kurikulum: values.id_kurikulum,
          kd_mapel: values.kd_mapel,
          nm_mapel: values.nm_mapel,
          kd_jurusan: values.kd_jurusan,
          nip: values.nip,
          tingkat: values.tingkat,
          kptsi_umum: values.kptsi_umum,
          kptsi_khusus: values.kptsi_khusus,
          jml_jam: values.jml_jam,
          id_kmapel: values.id_kmapel,
          status: values.status
      });

      history.push("/app/apps/mapel");
  };

  useEffect(() => {
      getKurikulum();
      getJurusan();
      getGuru();
      getKmapel();
      getMapel();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKurikulum = async () => {
      const response = await axios.get('http://localhost:5000/api/kurikulum');
      setKurikulum(response.data.data);
  }
  const getJurusan = async () => {
      const response = await axios.get('http://localhost:5000/api/jurusan');
      setJurusan(response.data.data);
  }
  const getGuru = async () => {
      const response = await axios.get('http://localhost:5000/api/guru');
      setGuru(response.data.data);
  }

  const getKmapel = async () => {
      const response = await axios.get('http://localhost:5000/api/kmapel');
      setKmapel(response.data.data);
  }

  const getMapel = async () => {
      const response = await axios.get(`http://localhost:5000/api/mapel/${id}`);
      const data = response.data
      setId(data.data.id_kurikulum)
      setKdm(data.data.kd_mapel)
      setNama(data.data.nm_mapel)
      setKds(data.data.kd_jurusan)
      setNip(data.data.nip)
      setTingkat(data.data.tingkat)
      setKptsiu(data.data.kptsi_umum)
      setKptsik(data.data.kptsi_khusus)
      setJam(data.data.jml_jam)
      setIdk(data.data.id_kmapel)
      setStatus(data.data.status)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="id_kurikulum" label="Kurikulum" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Kurikulum --</option>
              { kurikulums.map((kurikulum) => (
              <Option value={ kurikulum.id_kurikulum }>{ kurikulum.nm_kurikulum }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="kd_mapel" value={ kd_mapel } label="Kode Mapel" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="nm_mapel" value={ nm_mapel } label="Nama Mapel" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="kd_jurusan" label="Jurusan" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Jurusan --</option>
              { jurusans.map((jurusan) => (
              <Option value={ jurusan.kd_jurusan }>{ jurusan.nm_jurusan }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="nip" label="Guru Pengampu" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Guru Pengampu --</option>
              { gurus.map((guru) => (
              <Option value={ guru.nip }>{ guru.nm_guru }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="tingkat" value={ tingkat } label="Tingkat" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="kptsi_umum" value={ kptsi_umum } label="Kompetensi Umum" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="kptsi_khusus" value={ kptsi_khusus } label="Kompetensi Khusus" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="jml_jam" value={ jml_jam } label="Jumlah Jam" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="id_kmapel" label="Kelompok Mata Pelajaran" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <option valie="">-- Pilih Kelompok Mata Pelajaran --</option>
              { kmapels.map((kmapel) => (
              <Option value={ kmapel.id_kmapel }>{ kmapel.nm_kmapel }</Option>
              )) }
          </Select>
          </Form.Item>

          <Form.Item name="status" label="status" rules={[{ required: true }]} >
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
              <EditMapel />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
