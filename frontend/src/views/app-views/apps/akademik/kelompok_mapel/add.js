import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddKmapel = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onReset = () => {
    form.resetFields();
  };
  
  const onFinish = async (values) => {
      await axios.post('http://localhost:5000/api/kmapel',{
          jenis_kmapel: values.jenis_kmapel,
          nm_kmapel: values.nm_kmapel,
      });

      history.push("/app/apps/kmapel");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="jenis_kmapel" label="Jenis Kelompok" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="nm_kmapel" label="Nama Kelompok" rules={[{ required: true }]}>
          <Input/>
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
              <AddKmapel />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Add
