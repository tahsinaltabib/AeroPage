import React from 'react'
import './footer.css'
import Card from '../../reuseable/footercard/Card'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <section className='foot-sec'>
        <Container>
          <Row>
            <Col lg={4}><Card/></Col>
            <Col lg={4}><Card/></Col>
            <Col lg={4}><Card/></Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Footer