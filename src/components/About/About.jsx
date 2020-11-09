import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import AboutImg from './AboutImg';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

function About({about}) {
  const paragraphs = about.text.map((item,i )=> <p key={i}>{item}</p>)
    return (
        <section  id="about" className='about'>
            <Container >
                <h2 className='title'>
                    About me
                </h2>
                <Row>
                  <Col sm={12} md={6}>
                    <Roll left duration={1000}>
                      <AboutImg fileName={about.image}/>
                    </Roll>
                  </Col> 
                  <Col className='about__text' sm={12} md={6}>
                    
                    <Fade right delay={500} duration={1000} >
                   
                      {paragraphs}
                     
                      {about.resume && <a className='about__link' href={about.resume} target="_blank" rel="noreferrer">
                            Resume
                        </a> }
                        
                      </Fade>

                  </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
