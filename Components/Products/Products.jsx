import React from 'react'
import { Container , Row , Col} from 'react-bootstrap'

export default function () {
  return (
    <>
    <Container className='my-5'>
        <Row lg={2} md={2} sm={1} className='gy-4'>
            <Col>
            <img className='w-100' src="/productOne.png" alt="" />
            </Col>
            <Col>
            <img className='w-100' src="/productTwo.png" alt="" />
            </Col>
        </Row>
    </Container>
    </>
  )
}
