import React from "react";
import { Row, Col, Menu } from "antd";
import "antd/dist/antd.css";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render Header");
		return (
			<div style={{ backgroundColor: "#fff" }}>
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
					<Col span={5} />
				</Row>

				<Row>
					<Col span={5}></Col>

					<Col span={14}>
						<Menu mode="horizontal">
							<Menu.Item key="#do-nothing">
								<div>
									<img
										src={
											process.env.PUBLIC_URL + "/Logo.png"
                                        }
                                        style={{marginTop:"5px"}}
									/>
								</div>
							</Menu.Item>

							<Menu.Item key="homepage" icon={<HomeOutlined />}>
								<Link to="/">Trang chủ</Link>
							</Menu.Item>

							<Menu.Item key="about">
								<Link to="/about">Giới thiệu</Link>
							</Menu.Item>

							<Menu.Item key="article">
								<Link to="/article">Tin tức-sự kiên</Link>
							</Menu.Item>

							<SubMenu
								key="children-profile"
								title="Thông tin trẻ em"
							>
								<Menu.Item
									key="view-children-profile"
									title="Xem hồ sơ trẻ em"
								>
									<Link to="/view-children-profile">
										Xem hồ sơ trẻ em
									</Link>
								</Menu.Item>
								<Menu.Item
									key="post-children-profile"
									title="Gửi thông tin hồ sơ trẻ em"
								>
									<Link to="/post-children-profile">
										Gửi thông tin hồ sơ trẻ em
									</Link>
								</Menu.Item>
							</SubMenu>

							<Menu.Item key="sponsor">
								<Link to="/sponsor">Nhà hảo tâm</Link>
							</Menu.Item>
						</Menu>
					</Col>

					<Col span={5}></Col>
				</Row>
			</div>
		);
	}
}

export default Header;
