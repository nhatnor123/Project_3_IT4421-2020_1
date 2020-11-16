import React, { useState } from "react";
import { Form, Input, Tooltip, Row, Col, Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { SERVER } from "../../config/Config";

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const inputStyle = {
	fontSize: "16px",
};

const labelStyle = {
	fontSize: "14px",
};

export default class Register extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSummit = async (value) => {
		console.log(value);
		const registerPayload = {
			username: value.username,
			password: value.password,
			role: "POSTER",
			firstName: value.firstName,
			lastName: value.lastName,
			phoneNo: value.phoneNo,
			email: value.email,
			imageId: "",
			isApproved: false,
			createdBy: 1,
		};
		try {
			await axios.post(`${SERVER}/register`, registerPayload, {
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div>
				<Row style={{ backgroundColor: "rgba(0,80,135,1)" }}>
					<Col span={5} />
					<Col span={14}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/logo_bo_laodong_tbxh.png"
							}
							style={{ marginTop: "5px", marginBottom: "5px" }}
						/>
					</Col>
				</Row>

				<Row justify="center">
					<div style={{ fontSize: "30px", marginTop: "5px" }}>
						Đăng ký tài khoản
					</div>
				</Row>

				<Row style={{ marginTop: "10px" }}>
					<Col md={6} xs={2}></Col>
					<Col md={11} xs={17}>
						<Form
							{...formItemLayout}
							name="register"
							scrollToFirstError
							onFinish={this.handleSummit}
						>
							<Form.Item
								name="username"
								label={
									<div style={labelStyle}>Tên đăng nhập</div>
								}
								rules={[
									{
										required: true,
										message:
											"Vui lòng điền tên đăng nhập !",
									},
								]}
							>
								<Input style={inputStyle} />
							</Form.Item>

							<Form.Item
								name="email"
								label={<div style={labelStyle}>Email</div>}
								rules={[
									{
										type: "email",
										message: "Email không hợp lệ !",
									},
									{
										required: true,
										message: "Vui lòng điền email !",
									},
								]}
							>
								<Input style={inputStyle} />
							</Form.Item>

							<Form.Item
								name="password"
								label={<div style={labelStyle}>Mật khẩu</div>}
								rules={[
									{
										required: true,
										message: "Vui lòng điền mật khẩu !",
									},
								]}
								hasFeedback
							>
								<Input.Password style={inputStyle} />
							</Form.Item>

							<Form.Item
								name="confirm"
								label={
									<div style={labelStyle}>
										Nhập lại mật khẩu
									</div>
								}
								dependencies={["password"]}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Vui lòng điền lại mật khẩu",
									},
									({ getFieldValue }) => ({
										validator(rule, value) {
											if (
												!value ||
												getFieldValue("password") ===
													value
											) {
												return Promise.resolve();
											}
											return Promise.reject(
												"2 mật khẩu không khớp nhau !"
											);
										},
									}),
								]}
							>
								<Input.Password style={inputStyle} />
							</Form.Item>

							<Form.Item
								name="firstName"
								label={
									<span style={labelStyle}>
										Họ&nbsp;
										<Tooltip title="Họ trong tên của bạn">
											<QuestionCircleOutlined />
										</Tooltip>
									</span>
								}
								rules={[
									{
										required: true,
										message: "Vui lòng điền họ !",
										whitespace: true,
									},
								]}
							>
								<Input style={inputStyle} />
							</Form.Item>

							<Form.Item
								name="lastName"
								label={
									<span style={labelStyle}>
										Tên&nbsp;
										<Tooltip title="Tên của bạn">
											<QuestionCircleOutlined />
										</Tooltip>
									</span>
								}
								rules={[
									{
										required: true,
										message: "Vui lòng điền tên !",
										whitespace: true,
									},
								]}
							>
								<Input style={inputStyle} />
							</Form.Item>

							<Form.Item
								name="phoneNo"
								label={
									<div style={labelStyle}>Số điện thoại</div>
								}
								rules={[
									// {
									// 	type: "regexp",
									// 	pattern:new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),
									// 	message:
									// 		"Số điện thoại không hợp lệ !",
									// },
									{
										required: true,
										message:
											"Vui lòng nhập số điện thoại !",
									},
								]}
							>
								<Input
									style={{ width: "50%" }}
									style={inputStyle}
								/>
							</Form.Item>

							<Form.Item
								name="agreement"
								valuePropName="checked"
								rules={[
									{
										validator: (_, value) =>
											value
												? Promise.resolve()
												: Promise.reject(
														"Bắt buộc phải đồng ý"
												  ),
									},
								]}
								{...tailFormItemLayout}
							>
								<Checkbox>
									Tôi đồng ý với{" "}
									<a href="#">điều khoản của hệ thống</a>
								</Checkbox>
							</Form.Item>

							<Form.Item {...tailFormItemLayout}>
								<Row style={{ marginTop: "5px" }}>
									<Col md={7} xs={8}></Col>
									<Col md={5} xs={16}>
										<Button
											type="primary"
											htmlType="submit"
										>
											Register
										</Button>
									</Col>
								</Row>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}
