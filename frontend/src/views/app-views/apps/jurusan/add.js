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
          singkatan: values.Singkatan,
          slug: values.Jurusan,
          status: values.Status,
      });

      history.push("/app/apps/jurusan");
  };

  return (
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="Singkatan" label="Singkatan" rules={[{ required: true }]}>
          <Input/>
          </Form.Item>

          <Form.Item name="Jurusan" label="Jurusan" rules={[{ required: true }]}>
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
