import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Img from './ProjectImage'
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';


function Projects({projects}) {

  const list = projects.map(({id,live,source, filename,title,description,technologies},i) =>(
    <Row className='projects__row' key={id}>
        <Col className='projects__image' sm={12} md={8}>
            <Fade left={ i%2 ===0} right={i%2!==0}  delay={500} duration={1500}>
                <Tilt className="projects__tilt"
                              options={{
                                reverse: false,
                                max: 8,
                                perspective: 1000,
                                scale: 1,
                                speed: 300,
                                transition: true,
                                reset: true,
                                easing: 'cubic-bezier(.03,.98,.52,.99)',
                              }}
                >
                    <Img filename={filename}/>
                </Tilt>
            </Fade>
        </Col>
        <Col className='projects__text' sm={12} md={4}>
            <Fade right={ i%2 ===0} left={i%2!==0}  delay={500} duration={1800}>
                    <h4 >
                        {title}
                    </h4>
                    <p>{description}</p>
                    <p>Technolgies: <i>{technologies}</i></p>
                    <div>

                    {
                        live && <a className='projects__link' href={live} target="_blank" rel="noreferrer">
                            See Live
                        </a> 
                    }
                    {
                        source && <a className='projects__link' href={source} target="_blank" rel="noreferrer">
                            See source
                        </a> 
 
                    }
                    </div>

            </Fade>
        </Col>
    </Row>
  ))
    return (
        <section className="projects">
            <Container>
                <h2 className='title'>
                    Projects
                </h2>
                <div className='projects__list'>
                    {list}
                </div>
            </Container>
        </section>
        
    )
}

export default Projects
