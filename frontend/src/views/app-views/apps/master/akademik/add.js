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

const AddAkademik = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/akademik',{
          kd_thn: values.kd_thn,
          nm_thn: values.nm_thn,
          keterangan: values.keterangan,
          status: values.Status,
      });

      history.push("/app/apps/tahun-akademik");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="kd_thn" label="Kode Tahun Akademik" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="nm_thn" label="Nama Tahun Akademik" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>
          <Form.Item name="keterangan" label="Keterangan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="Status" label="Status Kurikulum" rules={[{ required: true }]} >
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
              <AddAkademik />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
