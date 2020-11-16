import React from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("render Footer");
		return (
			<div>
				<Row
					style={{
						backgroundColor: "rgba(0,80,135,1)",
					}}
				>
					<Col span={5}></Col>

					<Col span={14}>
						<Row style={{marginTop:"7px"}}>
							<Col span={10}>
								<div>
									<img
										src={
											process.env.PUBLIC_URL +
											"/logo_footer.png"
										}
										style={{ marginBottom: "30px" }}
									/>
								</div>
							</Col>
							<Col span={14}>
								<div
									style={{
										float: "right",
										textAlign: "right",
										fontSize: "15px",
										color: "#D5D5D5",
									}}
								>
									<div>
										Bản quyền thuộc nhóm 03-HaiPv It4421 2020-1
									</div>
									<div>Tel: 0123456789 * Fax: 0123456789 *</div>
									<div>
										Email: nhatnor123@gmail.com * Website: * Fanpage: *
									</div>
									<div>
										Thiết kế và phát triển bởi nhóm 03-HaiPv It4421 2020-1
									</div>
								</div>
							</Col>
						</Row>
					</Col>

					<Col span={5}></Col>
				</Row>
			</div>
		);
	}
}

export default Footer;
