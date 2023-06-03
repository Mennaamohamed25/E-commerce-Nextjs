import React from 'react';


//import css
import styles from  "../../styles/Features.module.css"
import { Container , Row , Col } from 'react-bootstrap';

export default function Features({features}) {
  
  return (
    <>
 <section className='products my-5' >
       <Container >
       <h2 className='  h5 mb-4 fw-bold '>Featured items</h2>
<Row lg={4} md={3}   className={styles.containerStyling}>
    {Object.values(features?.results || {}).map(feature => (
     <Col >
        
      <img src={feature.image} alt="" />
       <h6 className='mt-3 '>Nike Jordan Kids Air </h6>
       <h6>Jordan 4</h6>
 <div className={`d-flex align-items-center mb-5 ${styles.featurePrice}`}>
 <p className='me-2 mb-0 fs-5'>EGY {feature.price_after_sale}</p>
   <p className='mb-0 mt-1'>save {feature.price_before_sale}</p> 
 </div>
     </Col>
))}

</Row>
      </Container>
 </section>

    </>
  )
}
