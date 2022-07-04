import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditKepegawaian = () => {
  const [form] = Form.useForm();
  const [stts_kepegawaian, setKepegawaian] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    stts_kepegawaian: stts_kepegawaian,
    keterangan: keterangan,
  });

  const onFinish = async (values) => {
      await axios.put(`http://localhost:5000/api/kepegawaian/${id}`,{
          stts_kepegawaian: values.stts_kepegawaian,
          keterangan: values.keterangan,
      });

      history.push("/app/apps/kepegawaian");
  };

  useEffect(() => {
      getKepegawaian();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKepegawaian = async () => {
      const response = await axios.get(`http://localhost:5000/api/kepegawaian/${id}`);
      const data = response.data
      setKepegawaian(data.stts_kepegawaian)
      setKeterangan(data.keterangan)
  }

 
  return (
      <Form {...layout} form={form}  onFinish={onFinish}>
          <Form.Item name="stts_kepegawaian" value={ stts_kepegawaian } label="Status Kepegawaian" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item name="keterangan" value={ keterangan } label="Keterangan" rules={[{ required: true }]}>
          <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button className="mr-2" type="primary" htmlType="submit">Update</Button>
            <Button className="mr-2" htmlType="button" onClick={onReset}>Reset</Button>
          </Form.Item>
      </Form>
  );
};

export class Edit extends Component {
	render() {
		return (
    <div>
      <div className='code-box-form-demo'>
        <div className='basic'>
          <div className='code-box'>
            <section className='code-box-demo'>
              <EditKepegawaian />
            </section>
          </div>
        </div>
      </div> 
    </div> 
		)
	}
}

export default Edit
