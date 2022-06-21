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

const AddGedung = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/gedung',{
          kd_gedung: values.kd_gedung,
          nm_gedung: values.nm_gedung,
          jml_lantai: values.jml_lantai,
          panjang: values.panjang,
          tinggi: values.tinggi,
          lebar: values.lebar,
          keterangan: values.keterangan,
          status: values.status,
      });

      history.push("/app/apps/gedung");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="kd_gedung" label="Kode Gedung" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="nm_gedung" label="Nama Gedung" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="jml_lantai" label="Jumlah Lantai" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="panjang" label="Panjang Gedung" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="tinggi" label="Tinggi Gedung" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="lebar" label="Lebar Gedung" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="keterangan" label="Keterangan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="status" label="Status Gedung" rules={[{ required: true }]} >
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
              <AddGedung />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
