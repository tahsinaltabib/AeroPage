import React from 'react'
import Card from '../../reuseable/footercard/Card'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}></Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Footer