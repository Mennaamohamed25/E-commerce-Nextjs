import Link from 'next/link'
import React from 'react'
import { Container , Row , Col } from 'react-bootstrap';
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer >
        <Container>
            <Row lg={2} md={2} sm={2} >
                <Col className={styles.footer}>
<h5 className='mb-4'>Active Trending</h5>
<p>
<Link href='/#'>Men</Link>
</p>
<p>
<Link href='/#'>Women</Link>
</p>
<p>
<Link href='/#'>Kids</Link>
</p>



                </Col>
                <Col className={styles.footer}>
<h5 className='mb-4'>Active Trending</h5>
<p>
<Link href='/#'>About Company</Link>
</p>
<p>
<Link href='/#'>Connect Us</Link>
</p>
<p>
<Link href='/#'>Our Branches</Link>
</p>



                </Col>
            </Row>
        </Container>
    </footer>
    </>
  )
}
