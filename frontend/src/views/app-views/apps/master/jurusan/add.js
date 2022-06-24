import React, { Component } from 'react'
import { Form, Input, Button, Radio } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddJurusan = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/jurusan',{
          kd_jurusan: values.kd_jurusan,
          nm_jurusan: values.nm_jurusan,
          bidang_keahlian: values.bidang_keahlian,
          kptsi_umum: values.kptsi_umum,
          kptsi_khusus: values.kptsi_khusus,
          pejabat: values.pejabat,
          jabatan: values.jabatan,
          keterangan: values.keterangan,
          status: values.Status,
      });

      history.push("/app/apps/jurusan");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="kd_jurusan" label="Kode Jurusan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="nm_jurusan" label="Nama Jurusan" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="bidang_keahlian" label="Bidang Keahlian" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="kptsi_umum" label="Kompetensi Umum" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="kptsi_khusus" label="Kompetensi Khusus" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="pejabat" label="Pejabat" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="jabatan" label="Jabatan" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="keterangan" label="Keterangan" rules={[{ required: true }]}>
            <Input/>
          </Form.Item>

          <Form.Item name="Status" label="Status" rules={[{ required: true }]} >
            <Radio.Group>
              <Radio value="active">Active</Radio>
              <Radio value="nonactive">Non Active</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="mr-2" type="primary" htmlType="submit">Submit</Button>
            <Button className="mr-2" htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
      </Form>
  );
};

export class Add extends Component {
	render() {
		return (
    <div>
      <div className='code-box-form-demo'>
        <div className='basic'>
          <div className='code-box'>
            <section className='code-box-demo'>
              <AddJurusan />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
