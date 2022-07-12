import React from 'react';
import axios from 'axios';
import { Button, Form, Input, notification } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
	let history = useHistory();

	const onLogin = async (values) => {
		try {
				await axios.post('http://localhost:5000/auth/login', {
					email: values.email,
					password: values.password,
				});
				notification.success({
					message: 'Congratulations',
					description: "'Authentication Successfully',",
				})
				history.push("/app/home")
		} catch (error) {
				notification.error({
					message: 'Authentication Failed',
					description: error.response.data.message,
				})
		}
	};

	return (
		<>
			<Form 
				layout="vertical" 
				name="login-form"
				onFinish={onLogin}
			>
				<Form.Item 
					name="email" 
					label="Email" 
					rules={[
						{ 
							required: true,
							message: 'Please input your email',
						},
						{ 
							type: 'email',
							message: 'Please enter a validate email!'
						}
					]}>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password">
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block>
						Sign In
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default LoginForm
