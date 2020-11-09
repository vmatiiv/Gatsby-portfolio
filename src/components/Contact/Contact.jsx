import React from 'react'
import { Container,Col,Row } from 'react-bootstrap';

function Contact({contacts}) {

    function sendMail(e){
        e.preventDefault();
        const body = e.target["body"].value;
        const firstName = e.target["first_name"].value;
        const lastName = e.target["last_name"].value; 
        const message = `Hello\nIt\`s ${firstName} ${lastName}\n${body}`
        console.log(message)
        window.location.href = `mailto:${contacts.email}?body=${ encodeURIComponent(message)}`;
    }
    
const social = contacts.socials.map((item) =>   <a href={item.url} > 
                                                    <div style={{color:item.hover}}>
                                                        <div className="icon">
                                                            {item.icon}
                                                        </div>
                                                    </div>
                                                </a>)
    return (
        <section id="contact" className='contact'>
            <Container>
                <h2 className='title'>
                    Contact
                </h2>
                <Row className="contact-form">
                    <Col md={8} sm={12}>
                    <h3 className="title">
                                Get In Touch
                            </h3>
                    <form onSubmit={sendMail} >
                        <Row>
                            <Col className='form_inputWrap' sm={12} md={6}>
                                <label htmlFor='first_name'>Your firstname *</label>
                                <input className='form_input' type="text" required='required' placeholder='Enter your firstname' id='first_name' name="first_name" />
                            </Col>
                            <Col className='form_inputWrap' sm={12} md={6}>
                                <label htmlFor='last_name'>Your lastname *</label>
                                <input className='form_input' type="text" required='required' placeholder='Enter your lastname' id='last_name' name="last_name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col  className='form_inputWrap' sm={12}>
                                <label htmlFor='email'>Your email *</label>
                                <input className='form_input' type="email" required='required' placeholder='Enter your email' id='email' name="email" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='form_inputWrap' sm={12}>
                                <label htmlFor='message'>Your message *</label>
                                <textarea className='form_input' name="body" rows='4' required='required' placeholder='Enter your message' id='message'/>
                            </Col>
                        </Row>
                        <input className='form_inputButton' type="submit" value="Send message" />
                    </form>
                    </Col>
                    <Col md={4} sm={12}>
                        <h3 className="title">
                            My Contact Details
                        </h3>
                        <div>
                            {
                                contacts.email && 
                                <>
                                    <span>EMAIL</span>
                                    <p>
                                        {contacts.email}
                                    </p>
                                </>
                            }
                            {
                                contacts.phone && 
                                <>
                                    <span>PHONE</span>
                                    <p>
                                        {contacts.phone}
                                    </p>
                                </>
                            }
                            {
                                contacts.address && 
                                <>
                                    <span>ADDRESS</span>
                                    <p>
                                        {contacts.address}
                                    </p>
                                </>
                            } 
                            <div className="contact__social">
                                {social}
                            </div>                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
