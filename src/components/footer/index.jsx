import React, { memo } from "react";
import { Avatar, Divider, Row, Col } from "antd";
import { FooterWrap } from "./style";

export default memo(function Footer(props) {
  return (
    <FooterWrap>
      <div className="contents page">
        <Row>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <div>
              <span>
                <Avatar
                  size={30}
                  src="https://api.gaojianhua.top/api/v1/img/8dd3e5d1ea095b5c514fd39a77c06567/image/jpeg"
                />
              </span>
              <Divider
                type="vertical"
                style={{ fontSize: 30, color: "#999999" }}
              />
              <span style={{ color: " rgb(255, 255, 255)" }}>❤</span>
              <a href="https://github.com/treasureDouDou">doudou</a>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div style={{ textAlign: "center" }}>
              <a
                target="blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602005401"
                
              >
             
                <span>Accelerated & hosted by 4EVERLAND</span>
              </a>
             
            </div>
          </Col>
        </Row>
      </div>
    </FooterWrap>
  );
});
