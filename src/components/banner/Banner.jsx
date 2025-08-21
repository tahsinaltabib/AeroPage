import React from "react";
import "./banner.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../reuseable/Image";
import BannerImg from "../../assets/bannerImg.png";

const Banner = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={5}>
            <div>
              <button>Startup Business</button>
            </div>
            <div>
              <h3>Empowering startups to fuel their business growth</h3>
              <p>
                Eu posuere mi sed purus proin quisque molestie. Ut amet, at
                amet, velit nibh arcu eu. Id sem varius malesuada tincidunt
                sodales.
              </p>
            </div>
            <button>Get started now</button>
          </Col>

          <Col lg={5}>
            <Image src={BannerImg} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
