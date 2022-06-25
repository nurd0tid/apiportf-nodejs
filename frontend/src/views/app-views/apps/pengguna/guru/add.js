import React, { Component } from "react";
import { Descriptions, Input, Select, Form } from "antd";

export class Responsive extends Component {
  render() {
    return (
      <div className='code-box'>
          <div className='code-box-demo'>
            <Descriptions
              title="Responsive Descriptions"
              bordered
              column={{ xxl: 5, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}
            >
              <Descriptions.Item label="NIP">
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="NIK" span={2}>
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="Password">
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="SK CPNS" span={2}>
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="Nama Lengkap">
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="Tanggal CPNS" span={2}>
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="Tempat Lahir">
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="SK Pengangkat" span={2}>
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="Tanggal Lahir">
                  <Input size="small"/>
              </Descriptions.Item>
              <Descriptions.Item label="TMT Pengangkat" span={2}>
                <Form.Item>
                  <Input size="small"/>
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="Jenis Kelamin">
                <Form.Item size="small">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="Lemb. Pengangkat" span={2}>
                  <Input size="small"/>
              </Descriptions.Item>
            </Descriptions>
          </div>
      </div>
    );
  }
}

export default Responsive;
