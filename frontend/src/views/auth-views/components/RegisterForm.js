import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

const rules = {
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

export const RegisterForm = (props) => {

	const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect } = props
	const [form] = Form.useForm();
	let history = useHistory();

	const onSignUp = () => {
    	form.validateFields().then(values => {
			showLoading()
			signUp(values)
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if(showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
	});
	
	return (
		<>
			<motion.div 
				initial={{ opacity: 0, marginBottom: 0 }} 
				animate={{ 
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0 
				}}> 
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
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
					name="confirm" 
					label="ConfirmPassword" 
					rules={rules.confirm}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)


// import React from 'react'
// import axios from 'axios';
// import { useHistory } from "react-router-dom";
// import { LockOutlined, MailOutlined, SubnodeOutlined } from '@ant-design/icons';
// import { Button, Form, Input, notification  } from "antd";

// const rules = {
// 	nip_nipd: [
// 		{ 
// 			required: true,
// 			message: 'Please input your NIP/NIPD'
// 		}
// 	],
// 	email: [
// 		{ 
// 			required: true,
// 			message: 'Please input your email address'
// 		},
// 		{ 
// 			type: 'email',
// 			message: 'Please enter a validate email!'
// 		}
// 	],
// 	password: [
// 		{ 
// 			required: true,
// 			message: 'Please input your password'
// 		}
// 	],
// 	confirm: [
// 		{ 
// 			required: true,
// 			message: 'Please confirm your password!'
// 		},
// 		({ getFieldValue }) => ({
// 			validator(rule, value) {
// 				if (!value || getFieldValue('password') === value) {
// 					return Promise.resolve();
// 				}
// 				return Promise.reject('Passwords do not match!');
// 			},
// 		})
// 	]
// }

// export const RegisterForm = () => {
// 	const [form] = Form.useForm();
// 	let history = useHistory();

// 	const onSignUp = async (values) => {
// 		try {
// 				await axios.post('http://localhost:5000/auth/register', {
// 					nip_nipd: values.nip_nipd,
// 					email: values.email,
// 					password: values.password,
// 					confPassword: values.confPassword
// 				});
// 				notification.success({
// 					message: 'Congratulations',
// 					description: "Registration Successfully",
// 				})
// 				history.push("/auth/login")
// 		} catch (error) {
// 				notification.error({
// 					message: 'Registration Unsuccessfuly',
// 					description: error.response.data.message,
// 				})
// 		}
// 	}
	
// 	return (
// 		<>
// 			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
// 				<Form.Item 
// 					name="nip_nipd" 
// 					label="NIP/NIPD" 
// 					rules={rules.nip_nipd}
// 					hasFeedback
// 				>
// 					<Input prefix={<SubnodeOutlined className="text-primary" />}/>
// 				</Form.Item>

// 				<Form.Item 
// 					name="email" 
// 					label="Email" 
// 					rules={rules.email}
// 					hasFeedback
// 				>
// 					<Input prefix={<MailOutlined className="text-primary" />}/>
// 				</Form.Item>
// 				<Form.Item 
// 					name="password" 
// 					label="Password" 
// 					rules={rules.password}
// 					hasFeedback
// 				>
// 					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
// 				</Form.Item>
// 				<Form.Item 
// 					name="confPassword" 
// 					label="Confirm Password" 
// 					rules={rules.confirm}
// 					hasFeedback
// 				>
// 					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
// 				</Form.Item>
// 				<Form.Item>
// 					<Button type="primary" htmlType="submit" block>
// 						Sign Up
// 					</Button>
// 				</Form.Item>
// 			</Form>
// 		</>
// 	)
// }

// export default RegisterForm
