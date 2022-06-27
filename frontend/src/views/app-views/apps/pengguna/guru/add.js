import React, { Component } from 'react'
import { Form, Input, Col, Row, Button, DatePicker, Select } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
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
      // style={{ marginLeft: 420 }}
    >

      {/* <Row>
        <Col span={3}>
        <Form.Item>
          <Upload listType="picture">
            <Button>
              <UploadOutlined /> Click to upload
            </Button>
          </Upload>
        </Form.Item>
        </Col>
      </Row> */}

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="NIP"
                name="nip"
                rules={[
                  {
                    required: true,
                    message: 'Please input your NIP!',
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
                    message: 'Please input your NIK!',
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
                    message: 'Please input your Nama Lengkap!',
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
                    message: 'Please input your SK CPNS!',
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
                    message: 'Please input your Tempat Lahir!',
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
                    message: 'Please input your Tanggal CPNS!',
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
                    message: 'Please input your Tanggal Lahir!',
                  },
                ]}
              >
              <DatePicker />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="SK Pengangkat"
                name="sk_pengangkat"
                rules={[
                  {
                    required: true,
                    message: 'Please input your SK Pengangkat!',
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Jenis Kelamin"
                name="jenis_kelamin"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Jenis Kelamin!',
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
                label="TMT Pengangkat"
                name="tmt_pengangkat"
                rules={[
                  {
                    required: true,
                    message: 'Please input your TMT Pengangkat!',
                  },
                ]}
              >
              <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Agama"
                name="agama"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Agama!',
                  },
                ]}
              >
            <Select>
              <Option value="Islam">Islam</Option>
              <Option value="Kristen">Kristen</Option>
              <Option value="Hindu">Hindu</Option>
              <Option value="Buddha">Buddha</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Lemb. Pengangkat"
                name="lembaga_pengangkatan"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Lemb. Pengangkat!',
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
                    message: 'Please input your No. Handphone!',
                  },
                ]}
              >
            <Input.Group>
              <Row gutter={8}>
                <Col span={5}>
                  <Input defaultValue="62" />
                </Col>
                <Col span={8}>
                  <Input defaultValue="" />
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
                    message: 'Please input your Golongan!',
                  },
                ]}
              >
            <Select>
              <Option value="">-- Pilih Golongan --</Option>
              <Option value="IV/a">IV/a</Option>
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
                    message: 'Please input your No. Telepon!',
                  },
                ]}
              >
            <Input.Group>
              <Row gutter={8}>
                <Col span={5}>
                  <Input defaultValue="021" />
                </Col>
                <Col span={8}>
                  <Input defaultValue="" />
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
                    message: 'Please input your Sumber Gaji!',
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
                name="almt_jalan"
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
                name="nama_ibu_kandung"
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
                label="Pekerjaan Suami/Istri"
                name="pj_suami_istri"
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
              <Input />
          </Form.Item>
        </Col> 
      </Row>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export class Responsive extends Component {
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

export default Responsive;
