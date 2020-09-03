import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import awardSrc from "../../assets/images/awards-crop.png";
import logo from "../../assets/images/loho_sb.png";
import phoneIcon from "../../assets/images/call.png";
import mailIcon from "../../assets/images/mail.png";
import insta from "../../assets/images/insta.png";
import facebook from "../../assets/images/facebook.png";

const FooterContainer = styled.footer`
  padding: 2rem 0 1rem;
  background: #000;
  color: #fff;

  h6 {
    margin-bottom: 1rem;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 1rem;

  span {
    margin-bottom: 0.5rem;
    img {
      width: 18px;
      height: 18px;
      margin-right: 10px;
      object-fit: contain;
    }
  }
`;

const Social = styled.div`
  margin-bottom: 3rem;
  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  img + img {
    margin-left: 1rem;
  }
`;

const Links = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  list-style: none;
  margin-bottom: 2rem;

  li {
    flex: 1 50%;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 992px) {
    li {
      flex: 0 33.33%;
    }
  }
`;

const AwardCol = styled(Col)`
  img {
    margin: 1rem 0 0 2rem;
    width: 80px;
  }

  @media (min-width: 992px) {
    h6 {
      text-align: center;
    }
    img {
      margin: 1.5rem auto;
      display: block;
    }
  }
`;

const DeveloperCol = styled(Col)`
  display: flex;
  flex-flow: column;
  div + div {
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    div + div {
      margin-top: 0;
      order: -1;
    }
  }
`;

const Divider = styled.hr`
  background: white;
  margin: 1.5rem 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col xs={{ span: 8 }} md={{ span: 3 }}>
            <h6>The Glenz @ Glenmarie Sales Gallery</h6>
            <address>
              27, Jalan Juruanalisis, U1/35, Hicon-Glenmarie Industrial Park,
              40150 Shah Alam, Selangor
            </address>
            <Contact>
              <span>
                <img src={phoneIcon} alt="phone icon" aria-hidden="true" /> +6
                011 - 2826 1298
              </span>
              <span>
                <img src={mailIcon} alt="mail icon" aria-hidden="true" />
                theglenzsales@gmail.com
              </span>
            </Contact>
            <Social>
              <img src={facebook} alt="" aria-hidden="true" />
              <img src={insta} alt="" aria-hidden="true" />
            </Social>
          </Col>
          <Col xs={{ span: 8 }} md={{ span: 5, offset: 1 }}>
            <div>
              <h6>Easy Links</h6>
              <Links>
                <li>Overview</li>
                <li>Facilities</li>
                <li>Units</li>
                <li>Gallery</li>
                <li>Location</li>
                <li>Developer</li>
                <li>Floor Plan</li>
                <li>Register</li>
              </Links>
            </div>
          </Col>
          <AwardCol xs={{ span: 8 }} md={{ span: 3 }}>
            <h6 style={{}}>Winner of Best Commercial Suites Development</h6>
            <img src={awardSrc} alt="award" />
          </AwardCol>
        </Row>
        <Divider />
        <Row>
          <DeveloperCol xs={{ span: 8 }} md={12}>
            <div className="developer__logo">
              <span>
                Developed by
                <img
                  style={{ marginLeft: "1rem" }}
                  src={logo}
                  alt="Developer logo"
                  width="60"
                />
              </span>
            </div>
            <div className="developer__copyright">
              <span>Copyright 2019 The Glenz @ Glenmarie</span>
            </div>
          </DeveloperCol>
        </Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
