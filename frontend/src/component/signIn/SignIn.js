import React, { useState } from "react";
import { Form, Input, Tooltip, Row, Col, Checkbox, Button, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { SERVER } from "../../config/Config";
import { Link } from "react-router-dom";

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

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSummit = async (value) => {
		console.log("value = ");
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
		};
		console.log("registePayload = ");
		console.log(registerPayload);

		await axios
			.post(`${SERVER}/register`, registerPayload, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log("response = ");
				console.log(response);
				message.success("Đăng ký thành công", 3);

				
			})
			.catch((error) => {
				console.log("error = ");
				console.log(error);
				message.error("Đăng ký thất bại", 3);
			});
	};

	render() {
		return (
			<div>
				<Row style={{ backgroundColor: "rgba(0,80,135,1)" }}>
					<Col span={5} />
					<Col span={14}>
						<Link to="/">
							<img
								src={
									process.env.PUBLIC_URL +
									"/logo_bo_laodong_tbxh.png"
								}
								style={{
									marginTop: "5px",
									marginBottom: "5px",
								}}
							/>
						</Link>
					</Col>
				</Row>

				<Row justify="center">
					<div style={{ fontSize: "30px", marginTop: "65px" }}>
						Đăng nhập
					</div>
				</Row>

				<Row style={{ marginTop: "30px" }}>
					<Col md={6} xs={2}></Col>
					<Col md={11} xs={17}>
						<Form
							{...formItemLayout}
							name="signIn"
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

							<Form.Item {...tailFormItemLayout}>
								<Row style={{ marginTop: "5px" }}>
									<Col md={7} xs={8}></Col>
									<Col md={5} xs={16}>
										<Button
											type="primary"
											htmlType="submit"
										>
											Đăng nhập
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
