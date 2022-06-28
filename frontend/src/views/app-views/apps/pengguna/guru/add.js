import React, { Component } from 'react'
import { Form, Input, Col, Row, Button, DatePicker, Upload, Select, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useState, useEffect } from 'react';

const { Option } = Select;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const [golongans, setGolongan] = useState([]);
  const [ptks, setPtk] = useState([]);
  const [kepegawaians, setKepegawaian] = useState([]);

  useEffect(() => {
      getGolongan();
      getPtk();
      getKepegawaian();
  }, []);

  const getGolongan = async () => {
      const response = await axios.get('http://localhost:5000/api/golongan');
      setGolongan(response.data.data);
  }
  const getPtk = async () => {
      const response = await axios.get('http://localhost:5000/api/ptk');
      setPtk(response.data.data);
  }
  const getKepegawaian = async () => {
      const response = await axios.get('http://localhost:5000/api/kepegawaian');
      setKepegawaian(response.data.data);
  }
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout={'vertical'}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="NIP"
                name="nip"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="NIK"
                name="nik"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Nama Lengkap"
                name="nm_guru"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="SK CPNS"
                name="sk_cpns"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Tempat Lahir"
                name="tmpt_lahir"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Tanggal CPNS"
                name="tgl_cpns"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <DatePicker />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Tanggal Lahir"
                name="tgl_lahir"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <DatePicker />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="SK Pengangkatan"
                name="sk_pengangkatan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Jenis Kelamin"
                name="jenkel"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Select>
              <Option value="Perempuan">Perempuan</Option>
              <Option value="Laki - Laki">Laki - Laki</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="TMT Pengangkatan"
                name="tmt_pengangkatan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <DatePicker />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Agama"
                name="agama"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Select>
              <Option value="Islam">Islam</Option>
              <Option value="Kristen">Kristen</Option>
              <Option value="Hindu">Hindu</Option>
              <Option value="Buddha">Buddha</Option>
              <Option value="Katolik">Katolik</Option>
              <Option value="Khonghucu">Khonghucu</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Lemb. Pengangkatan"
                name="lemb_pengangkatan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="No. Handphone"
                name="no_hp"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Input.Group>
              <Row gutter={8}>
                <Col span={5}>
                  <Input 
                  placeholder='62'
                  />
                </Col>
                <Col span={8}>
                  <Input />
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Golongan"
                name="id_golongan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Golongan --</Option>
              { golongans.map((golongan) => (
              <Option value={ golongan.id_golongan }>{ golongan.nm_golongan }</Option>
              )) }
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="No. Telepon"
                name="no_telp"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Input.Group>
              <Row gutter={8}>
                <Col span={5}>
                  <Input placeholder='021' />
                </Col>
                <Col span={8}>
                  <Input />
                </Col>
              </Row>
            </Input.Group>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Sumber Gaji"
                name="sumber_gaji"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: 'email',
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Keahlian Laboratorium"
                name="keahlian_laboratorium"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Alamat Rumah"
                name="almt_rumah"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Nama Ibu Kandung"
                name="nm_ibu_kandung"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="RT/RW"
                name="rt_rw"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input
              placeholder='00/00'
              />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Nama Suami/Istri"
                name="nm_suami_istri"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col> 
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Kode Pos"
                name="kode_pos"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="NIP Suami/Istri"
                name="nip_suami_istri"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col> 
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Kabupaten/Kota"
                name="kab_kota"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Pekerjaan Suami/Istri"
                name="pekerjaan_suami_istri"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Kecamatan"
                name="kecamatan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="TMT PNS"
                name="tmt_pns"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <DatePicker />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Kelurahan"
                name="kelurahan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Lisensi Kepsek"
                name="lisensi_kepsek"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Provinsi"
                name="provinsi"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Jumlah Sekolah Binaan"
                name="jml_sklh_binaan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>  
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="NUPTK"
                name="nuptk"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Diklat Kepengawasan"
                name="diklat_kepengawasan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Bidang Studi"
                name="bidang_studi"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Mampu Handle KK"
                name="mampu_handle_kk"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Jenis PTK"
                name="id_ptk"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Jenis PTK --</Option>
              { ptks.map((ptk) => (
              <Option value={ ptk.id_ptk }>{ ptk.nm_ptk }</Option>
              )) }
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Keahlian Breile"
                name="keahlian_breile"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Tugas Tambahan"
                name="tgs_tambahan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Keahlian Bahasa Isyarat"
                name="keahlian_bhs_isyarat"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Status Kepegawaian"
                name="id_kepegawaian"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Status Kepegawaian --</Option>
              { kepegawaians.map((kepegawaian) => (
              <Option value={ kepegawaian.id_kepegawaian }>{ kepegawaian.stts_kepegawaian }</Option>
              )) }
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Kewarganegaraan"
                name="kewarganegaraan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Status Keaktifan"
                name="status"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Radio.Group>
              <Radio value="active">Active</Radio>
              <Radio value="non active">Non Active</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="NIY/NIGK"
                name="niy_nigk"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Status Pernikahan"
                name="stts_pernikahan"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Radio.Group>
              <Radio value="Menikah">Menikah</Radio>
              <Radio value="Belum Menikah">Belum Menikah</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="NPWP"
                name="npwp"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item name="photo">
            <Upload listType="picture">
              <Button>
                <UploadOutlined /> Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
        <Form.Item {...tailLayout} className="mt-4">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export class AddGuru extends Component {
  render() {
    return (
    <div>
      <div className='code-box-form-demo'>
        <div className='basic'>
          <div className='code-box'>
            <section className='code-box-demo'>
            <Demo />
            </section>
          </div>
        </div>
      </div> 
    </div> 
    );
  }
}

export default AddGuru;
