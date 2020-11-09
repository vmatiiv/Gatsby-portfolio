import React from 'react'
import { Container,Col,Row} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

function Technologies({technologies}) {
    
    const list = technologies.map((item ,i)=> (
        <Col lg={3} md={6} sm={12} key={item.id} >
            <Fade left={i < technologies.length/2} right={ i >= technologies.length/2}>
                <figure >
                    <div style={{color:item.hover}}>
                        <div className="icon">
                            {item.icon}
                        </div>
                    </div>
                    {item.title &&  <figcaption>
                                        <h3>{item.title}</h3>
                                    </figcaption>}
                </figure>
            </Fade>
    </Col>
    ))
    return (
        <section className="technologies">
            <Container>
                <h2 className='title'>
                    Technologies
                </h2>
                <Row className='technologies__figure'>
                    {list}
                </Row>
            </Container>
        </section>
    )
}

export default Technologies
