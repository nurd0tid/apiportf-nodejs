import React from 'react'
import { Row, Col, Tag, Card, Avatar, Button } from 'antd';
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import Flex from 'components/shared-components/Flex'
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import moment from 'moment';

const DetailGuru = () => {
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
  const [id_golongan, setGolongan] = useState('');
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
  const [id_ptk, setPtk] = useState('');
  const [keahlian_breile, setBreile] = useState('');
  const [tgs_tambahan, setTgs] = useState('');
  const [keahlian_bhs_isyarat, setIsyarat] = useState('');
  const [id_kepegawaian, setKepegawaian] = useState('');
  const [kewarganegaraan, setKwrgn] = useState('');
  const [status, setStatus] = useState('');
  const [niy_nigk, setNgk] = useState('');
  const [stts_pernikahan, setNikah] = useState('');
  const [npwp, setNpwp] = useState('');
  const [photo, setPhoto] = useState('');
  const { id } = useParams();

  useEffect(() => {
      getGuru();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      setGolongan(data.data.id_golongan)
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
      setPtk(data.data.id_ptk)
      setBreile(data.data.keahlian_breile)
      setTgs(data.data.tgs_tambahan)
      setIsyarat(data.data.keahlian_bhs_isyarat)
      setKepegawaian(data.data.id_kepegawaian)
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
                  <a href={"/app/apps/guru-edit/" +  id }>Edit</a> 
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
	<Card title="Profile">
		<Row gutter={30}>
			<Col sm={24} md={12}>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Data Pribadi</h4>
          <ul>
            <li><b>Nomor Induk Kependudukan :</b> { nik }</li>
            <li><b>Alamat :</b> { almt_rumah }</li>
            <li><b>RT/RW :</b> { rt_rw }</li>
            <li><b>Kode Pos :</b> { kode_pos }</li>
            <li><b>Kelurahan :</b> { kelurahan }</li>
            <li><b>Kecamatan :</b> { kecamatan }</li>
            <li><b>Kabputan/Kota :</b> { kab_kota }</li>
            <li><b>Provinsi :</b> { provinsi }</li>
            <li><b>Tempat Lahir :</b> { tmpt_lahir }</li>
            <li><b>Tanggal Lahir :</b> { moment(tgl_lahir).format("DD-MM-YYYY") }</li>
            <li><b>Jenis Kelamin :</b> { jenkel }</li>
            <li><b>Agama :</b> { agama }</li>
            <li><b>Kewarganegaraan :</b> { kewarganegaraan }</li>
            <li><b>Status Pernikahan :</b> { stts_pernikahan }</li>
            <li><b>NPWP :</b> { npwp }</li>
            <li><b>Sumber Gaji :</b> { sumber_gaji }</li>
          </ul>
        </div>
			</Col>
			<Col sm={24} md={12}>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Data Kependidikan
                {(() => {
                  if ( status === 'active'){
                    return (
                        <Tag color="green" key={ status } style={{ marginLeft: 5 }}>
                          { status.toUpperCase() }
                        </Tag>
                    )
                  }else if( status === 'nonactive'){
                    return (
                        <Tag color="volcano" key={ status } style={{ marginLeft: 5 }}>
                          { status.toUpperCase() }
                        </Tag>
                    )
                  }
                })()}
          </h4>
          <ul>
            <li><b>Nomor Identitas Pegawai :</b> { nip }</li>
            <li><b>TMT CPNS :</b> { moment(tmt_pns).format("DD-MM-YYYY") }</li>
            <li><b>SK CPNS :</b> { sk_cpns }</li>
            <li><b>Tanggal CPNS :</b> { moment(tgl_cpns).format("DD-MM-YYYY") }</li>
            <li><b>SK Pengangkatan :</b> { sk_pengangkatan }</li>
            <li><b>TMT Pengangkatan :</b> { moment(tmt_pengangkatan).format("DD-MM-YYYY") }</li>
            <li><b>Lemb. Pengangkatan :</b> { lemb_pengangkatan }</li>
            <li><b>Golongan :</b> { id_golongan }</li>
            <li><b>Keahlian Laboratorium :</b> { keahlian_laboratorium }</li>
            <li><b>Keahlian Breile :</b> { keahlian_breile }</li>
            <li><b>Keahlian Bahasa Isyarat :</b> { keahlian_bhs_isyarat }</li>
            <li><b>Lisensi Kepala Sekolah :</b> { lisensi_kepsek }</li>
            <li><b>NUPTK :</b> { nuptk }</li>
            <li><b>Diklat Kepengawasan :</b> { diklat_kepengawasan }</li>
            <li><b>Bidang Studi :</b> { bidang_studi }</li>
            <li><b>Mampu Handle KK :</b> { mampu_handle_kk }</li>
            <li><b>Jenis PTK :</b> { id_ptk }</li>
            <li><b>Status Kepegawaian :</b> { id_kepegawaian }</li>
            <li><b>NIY/NIGK :</b> { niy_nigk }</li>
            <li><b>Jumlah Sekolah Binaan :</b> { jml_sklh_binaan }</li>
            <li><b>Tugas Tambahan :</b> { tgs_tambahan }</li>
          </ul>
        </div>
			</Col>
			<Col sm={24} md={12}>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Contact</h4>
          <ul>
            <li><b>No. Handphone :</b> { no_hp }</li>
            <li><b>No. Telepon :</b> { no_telp }</li>
            <li><b>Email :</b> { email }</li>
          </ul>
        </div>
			</Col>
			<Col sm={24} md={12}>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Family</h4>
          <ul>
            <li><b>Nama Ibu Kandung :</b> { nm_ibu_kandung }</li>
            <li><b>Nama Suami/Istri :</b> { nm_suami_istri }</li>
            <li><b>Pekerjaan Suami/Istri :</b> { pekerjaan_suami_istri }</li>
            <li><b>NIP Suami/Istri :</b> { nip_suami_istri }</li>
          </ul>
        </div>
			</Col>
		</Row>
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
