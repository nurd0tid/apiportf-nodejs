import React from 'react'
import { Row, Col, Card, Avatar, Button, Form, Input, Upload, Select, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import Flex from 'components/shared-components/Flex'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const { Option } = Select;
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const DetailGuru = () => {
  const [form] = Form.useForm();
  const [golongans, setGolongan] = useState([]);
  const [ptks, setPtk] = useState([]);
  const [kepegawaians, setKepegawaian] = useState([]);
  const [nip,	setNip] = useState('')
  const [nik, setNik] = useState('')
  const [nm_guru, setNama] = useState('')
  const [sk_cpns, setSkcpns] = useState('')
  const [tmpt_lahir, setTmptlahir] = useState('')
  const [tgl_cpns, setTglcpns] = useState('')
  const [tgl_lahir, setTgllahir] = useState('')
  const [sk_pengangkatan, setSkpeng] = useState('')
  const [jenkel, setJenkel] = useState('')
  const [tmt_pengangkatan, setTmtpeng] = useState('')
  const [agama, setAgama] = useState('')
  const [lemb_pengangkatan, setLempeng] = useState('');
  const [no_hp, setHp] = useState('');
  const [no_telp, setTelp] = useState('');
  const [sumber_gaji, setGaji] = useState('');
  const [email, setEmail] = useState('');
  const [keahlian_laboratorium, setLab] = useState('');
  const [almt_rumah, setRum] = useState('');
  const [nm_ibu_kandung, setIbu] = useState('');
  const [rt_rw, setRtrw] = useState('');
  const [nm_suami_istri, setSitr] = useState('');
  const [kode_pos, setPos] = useState('');
  const [nip_suami_istri, setNipsitr] = useState('');
  const [kab_kota, setKab] = useState('');
  const [pekerjaan_suami_istri, setPeksitr] = useState('');
  const [kecamatan, setKec] = useState('');
  const [tmt_pns, setTmtpns] = useState('');
  const [kelurahan, setKel] = useState('');
  const [lisensi_kepsek, setLiskep] = useState('');
  const [provinsi, setProv] = useState('');
  const [jml_sklh_binaan, setJml] = useState('');
  const [nuptk, setNuptk] = useState('');
  const [diklat_kepengawasan, setDiklat] = useState('');
  const [bidang_studi, setStudi] = useState('');
  const [mampu_handle_kk, setHandle] = useState('');
  const [keahlian_breile, setBreile] = useState('');
  const [tgs_tambahan, setTgs] = useState('');
  const [keahlian_bhs_isyarat, setIsyarat] = useState('');
  const [kewarganegaraan, setKwrgn] = useState('');
  const [status, setStatus] = useState('');
  const [niy_nigk, setNgk] = useState('');
  const [stts_pernikahan, setNikah] = useState('');
  const [npwp, setNpwp] = useState('');
  const [photo, setPhoto] = useState('');
  const { id } = useParams();

  form.setFieldsValue({
    nip:	nip,
    nik:	nik,
    nm_guru:	nm_guru,
    sk_cpns:	sk_cpns,
    tmpt_lahir:	tmpt_lahir,
    tgl_cpns:	tgl_cpns,
    tgl_lahir:	tgl_lahir,
    sk_pengangkatan:	sk_pengangkatan,
    jenkel:	jenkel,
    tmt_pengangkatan:	tmt_pengangkatan,
    agama:	agama,
    lemb_pengangkatan:	lemb_pengangkatan,
    no_hp:	no_hp,
    // id_golongan:	id_golongan,
    no_telp:	no_telp,
    sumber_gaji:	sumber_gaji,
    email:	email,
    keahlian_laboratorium:	keahlian_laboratorium,
    almt_rumah:	almt_rumah,
    nm_ibu_kandung:	nm_ibu_kandung,
    rt_rw:	rt_rw,
    nm_suami_istri:	nm_suami_istri,
    kode_pos:	kode_pos,
    nip_suami_istri:	nip_suami_istri,
    kab_kota:	kab_kota,
    pekerjaan_suami_istri:	pekerjaan_suami_istri,
    kecamatan:	kecamatan,
    tmt_pns:	tmt_pns,
    kelurahan:	kelurahan,
    lisensi_kepsek:	lisensi_kepsek,
    provinsi:	provinsi,
    jml_sklh_binaan:	jml_sklh_binaan,
    nuptk:	nuptk,
    diklat_kepengawasan:	diklat_kepengawasan,
    bidang_studi:	bidang_studi,
    mampu_handle_kk:	mampu_handle_kk,
    // id_ptk:	id_ptk,
    keahlian_breile:	keahlian_breile,
    tgs_tambahan:	tgs_tambahan,
    keahlian_bhs_isyarat:	keahlian_bhs_isyarat,
    // id_kepegawaian:	id_kepegawaian,
    kewarganegaraan:	kewarganegaraan,
    status:	status,
    niy_nigk:	niy_nigk,
    stts_pernikahan:	stts_pernikahan,
    npwp:	npwp,
    photo:	photo,
  });

  useEffect(() => {
      getGolongan();
      getPtk();
      getKepegawaian();
      getGuru();
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const getGuru = async () => {
      const response = await axios.get(`http://localhost:5000/api/guru/${id}`);
      const data = response.data
      setNip(data.data.nip)
      setNik(data.data.nik)
      setNama(data.data.nm_guru)
      setSkcpns(data.data.sk_cpns)
      setTmptlahir(data.data.tmpt_lahir)
      setTglcpns(data.data.tgl_cpns)
      setTgllahir(data.data.tgl_lahir)
      setSkpeng(data.data.sk_pengangkatan)
      setJenkel(data.data.jenkel)
      setTmtpeng(data.data.tmt_pengangkatan)
      setAgama(data.data.agama)
      setLempeng(data.data.lemb_pengangkatan)
      setHp(data.data.no_hp)
      // setGolongan(data.data.id_golongan)
      setTelp(data.data.no_telp)
      setGaji(data.data.sumber_gaji)
      setEmail(data.data.email)
      setLab(data.data.keahlian_laboratorium)
      setRum(data.data.almt_rumah)
      setIbu(data.data.nm_ibu_kandung)
      setRtrw(data.data.rt_rw)
      setSitr(data.data.nm_suami_istri)
      setPos(data.data.kode_pos)
      setNipsitr(data.data.nip_suami_istri)
      setKab(data.data.kab_kota)
      setPeksitr(data.data.pekerjaan_suami_istri)
      setKec(data.data.kecamatan)
      setTmtpns(data.data.tmt_pns)
      setKel(data.data.kelurahan)
      setLiskep(data.data.lisensi_kepsek)
      setProv(data.data.provinsi)
      setJml(data.data.jml_sklh_binaan)
      setNuptk(data.data.nuptk)
      setDiklat(data.data.diklat_kepengawasan)
      setStudi(data.data.bidang_studi)
      setHandle(data.data.mampu_handle_kk)
      // setPtk(data.data.id_ptk)
      setBreile(data.data.keahlian_breile)
      setTgs(data.data.tgs_tambahan)
      setIsyarat(data.data.keahlian_bhs_isyarat)
      // setKepegawaian(data.data.id_kepegawaian)
      setKwrgn(data.data.kewarganegaraan)
      setStatus(data.data.status)
      setNgk(data.data.niy_nigk)
      setNikah(data.data.stts_pernikahan)
      setNpwp(data.data.npwp)
      setPhoto(data.data.photo)
  }

  const ProfileInfo = props => (
    <Card>
		<Row justify="center"> 
			<Col sm={24} md={23}>
				<div className="d-md-flex">
					<div className="rounded p-2 bg-white shadow-sm mx-auto" style={{'marginTop': '-3.5rem', 'maxWidth': `${props.avatarSize + 16}px`}}>
						<Avatar shape="square" size={props.avatarSize} src={"http://localhost:5000/photo_guru/" + photo } />
					</div>
					<div className="ml-md-4 w-100">
						<Flex alignItems="center" mobileFlex={false} className="mb-3 text-md-left text-center">
							<h2 className="mb-0 mt-md-0 mt-2">{ nm_guru }</h2>
							<div className="ml-md-3 mt-3 mt-md-0">
								<Button size="small" type="primary">
                  <a href={"/app/apps/guru-detail/" +  id }>Detail</a> 
                  </Button>
							</div>
						</Flex>
					</div>
				</div>
			</Col>
		</Row>
	</Card>
  )
  const Detail = () => (
	<Card title="Edit Profile">
    <Form
      form={form}
      // onFinish={onFinish}
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
              <Input 
              type="date"/>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item
                label="Tanggal Lahir"
                name="tgl_lahir"
                type="date"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input
              type="date"/>
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
            <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Jenis Kelamin --</Option>
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
              <Input 
              type="date"/>
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
            <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Agama --</Option>
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
            <Input/>
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
            <Input/>
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
            <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Keahlian Laboratorium --</Option>
              <Option value="Ya">Ya</Option>
              <Option value="Tidak">Tidak</Option>
            </Select>
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
              <Input 
              type="date"/>
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
              <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Lisensi Kepsek --</Option>
              <Option value="Ya">Ya</Option>
              <Option value="Tidak">Tidak</Option>
            </Select>
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
              <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Diklat Kepengawasan --</Option>
              <Option value="Ya">Ya</Option>
              <Option value="Tidak">Tidak</Option>
            </Select>
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
              <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Kemampuan Handle KK --</Option>
              <Option value="Ya">Ya</Option>
              <Option value="Tidak">Tidak</Option>
            </Select>
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
              <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Kehalian Breile --</Option>
              <Option value="Ya">Ya</Option>
              <Option value="Tidak">Tidak</Option>
            </Select>
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
            <Select placeholder="Select a option and change input text above">
              <Option value="">-- Pilih Kehalian Bahasa Isyarat --</Option>
              <Option value="Ya">Ya</Option>
              <Option value="Tidak">Tidak</Option>
            </Select>
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
          <Form.Item 
          label="Photo" 
          name="photo"
          getValueFromEvent={({file}) => file.originFileObj}
          rules={[
                  {
                    required: true,
                    message: 'Please upload photo'
                  },
          ]}
          >
            <Upload listType="picture">
              <Button>
                <UploadOutlined /> Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
        <Form.Item {...tailLayout} className="mt-4">
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Row>
    </Form>
	</Card>
  )

  const avatarSize = 150;
      return (
        <>
          <PageHeaderAlt background="/img/others/img-12.jpg" cssClass="bg-primary" overlap>
            <div className="container text-center">
              <div className="py-5 my-md-5">
              </div>
            </div>
          </PageHeaderAlt>
          <div className="container my-4">
            <ProfileInfo avatarSize={avatarSize} />
            <Row gutter="16">
              <Col xs={24} sm={24} md={24}>
                <Detail />
              </Col>
            </Row> 
          </div>
        </>
      );
}

export default DetailGuru