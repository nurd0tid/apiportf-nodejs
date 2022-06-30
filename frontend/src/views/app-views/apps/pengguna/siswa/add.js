import React, { Component } from 'react'
import { Form, Input, Col, Row, Select, Upload, Button, Radio, Tabs, Card } from 'antd';
import { UploadOutlined, CaretRightOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useState, useEffect } from 'react';

const { TabPane } = Tabs;
const { Option } = Select;

// function callback(key) {
//   console.log(key);
// }


const AddSiswa = () => {
	const [kelass, setKelas] = useState([]);
	const [jurusans, setJurusan] = useState([]);
	const [activeKey, setActiveKey] = useState('1')
  const onKeyChange = (key) => setActiveKey(key)

	useEffect(() => {
			getKelas();
			getJurusan();
	}, [])

	const getKelas = async () => {
		const response = await axios.get('http://localhost:5000/api/kelas');
		setKelas(response.data.data);
	}
	const getJurusan = async () => {
				const response = await axios.get('http://localhost:5000/api/jurusan');
				setJurusan(response.data.data);
	}

	
	return (
		<Form layout={'vertical'}>
			<Tabs type="card" defaultActiveKey="1" activeKey={activeKey} onChange={onKeyChange}>
				<TabPane tab="Data Siswa" key="1">
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col className="gutter-row" span={12}>
							<Form.Item
										label="NIPD"
										name="nipd"
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
										label="NISN"
										name="nisn"
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
										label="Nama Lengkap"
										name="nm_siswa"
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
										label="Tanggal Lahir"
										name="tgl_lahir"
										rules={[
											{
												required: true,
											},
										]}
									>
									<Input type='date' />
							</Form.Item>
						</Col>
						<Col className="gutter-row" span={12}>
							<Form.Item
										label="Kelas"
										name="kd_kelas"
										rules={[
											{
												required: true,
											},
										]}
									>
								<Select placeholder="Select a option and change input text above">
									<Option value="">-- Pilih Kelas--</Option>
									{ kelass.map((kelas) => (
									<Option value={ kelas.kd_kelas }>{ kelas.nm_kelas }</Option>
									)) }
								</Select>
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
									<Option value="">-- Pilih Jenis Kelamin--</Option>
									<Option value="Perempuan">Perempuan</Option>
									<Option value="Laki - Laki">Laki - Laki</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col className="gutter-row" span={12}>
							<Form.Item
										label="Angkatan"
										name="angkatan"
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
										label="Jurusan"
										name="kd_jurusan"
										rules={[
											{
												required: true,
											},
										]}
									>
								<Select placeholder="Select a option and change input text above">
									<Option value="">-- Pilih Jurusan--</Option>
									{ jurusans.map((jurusan) => (
									<Option value={ jurusan.kd_jurusan }>{ jurusan.nm_jurusan }</Option>
									)) }
								</Select>
							</Form.Item>
						</Col>
						<Col className="gutter-row" span={12}>
							<Form.Item
										label="Kebutuhan Khusus"
										name="keb_khusus"
										rules={[
											{
												required: true,
											},
										]}
									>
									<Select placeholder="Select a option and change input text above">
										<Option value="">-- Pilih Keterangan --</Option>
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
										label="Jenis Tinggal"
										name="jenis_tinggal"
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
										label="Transportasi"
										name="transportasi"
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
										label="No. Telepon"
										name="no_telp"
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
										label="No. Handphone"
										name="no_hp"
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
										label="SKHUN"
										name="skun"
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
										name="kd_pos"
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
										label="Penerima KJP"
										name="penerima_kjp"
										rules={[
											{
												required: true,
											},
										]}
									>
									<Select placeholder="Select a option and change input text above">
										<Option value="">-- Pilih Keterangan --</Option>
										<Option value="Ya">Ya</Option>
										<Option value="Tidak">Tidak</Option>
									</Select>
							</Form.Item>
						</Col>
						<Col className="gutter-row" span={12}>
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
						<Col className='gutter-row' span={24} align="right">
							<Button type="dashed" icon={ <CaretRightOutlined/> } onClick={() => onKeyChange('2')}>
								Next
							</Button>
						</Col>
					</Row>
				</TabPane>
				<TabPane tab="Data Orang Tua / Wali" key="2">
					Ini Tab 2
				</TabPane>
			</Tabs>
		</Form>
	)
}

export class Add extends Component {
  render() {
    return (
			<div>
				<Card>
            <AddSiswa />
				</Card>
			</div>
    );
  }
}

export default Add
