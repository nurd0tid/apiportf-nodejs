import React from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { LockOutlined, MailOutlined, SubnodeOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification  } from "antd";

const rules = {
	nip_nipd: [
		{ 
			required: true,
			message: 'Please input your NIP/NIPD'
		}
	],
	email: [
		{ 
			required: true,
			message: 'Please input your email address'
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your password'
		}
	],
	confirm: [
		{ 
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

export const RegisterForm = () => {
	const [form] = Form.useForm();
	let history = useHistory();

	const onSignUp = async (values) => {
		try {
				await axios.post('http://localhost:5000/auth/register', {
					nip_nipd: values.nip_nipd,
					email: values.email,
					password: values.password,
					confPassword: values.confPassword
				});
				notification.success({
					message: 'Congratulations',
					description: "Registration Successfully",
				})
				history.push("/auth/login")
		} catch (error) {
				notification.error({
					message: 'Registration Unsuccessfuly',
					description: error.response.data.message,
				})
		}
	}
	
	return (
		<>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
				<Form.Item 
					name="nip_nipd" 
					label="NIP/NIPD" 
					rules={rules.nip_nipd}
					hasFeedback
				>
					<Input prefix={<SubnodeOutlined className="text-primary" />}/>
				</Form.Item>

				<Form.Item 
					name="email" 
					label="Email" 
					rules={rules.email}
					hasFeedback
				>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="confPassword" 
					label="Confirm Password" 
					rules={rules.confirm}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default RegisterForm
