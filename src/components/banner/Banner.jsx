import React from "react";
import "./banner.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../reuseable/Image";
import BannerImg from "../../assets/bannerImg.png";

const Banner = () => {
  return (
    <section className="bann-sec">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="bann-btn1">
              <button className="btn1">Startup Business
              </button>
            </div>
            <div className="bann-mid">
              <h3>Empowering startups to fuel their business growth</h3>
              <p>
                Eu posuere mi sed purus proin quisque molestie. Ut amet, at
                amet, velit nibh arcu eu. Id sem varius malesuada tincidunt
                sodales.
              </p>
            </div>
            <div className="bann-end">
              <button className="end-btn">Get started now
              </button>
            </div>
          </Col>

          <Col lg={5}>
            <Image className='design' src={BannerImg} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
