import React from "react";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Row , Col } from "react-bootstrap";
import LoginImg from '../assets/img1.png';
import { useNavigate } from "react-router-dom";

export default function( {setUser}){
     const navigate = useNavigate()
     const [email , setEmail] = useState('')
     
     function handleEmail(){
        localStorage.setItem('userEmail' ,email)
        setUser(email)
        navigate('/')
     }
    return(
        <div style={{height:'88vh', backgroundColor:'#f54236' , overflowX:'hidden'}}>
            <Row>
                <Col>
                <div>
                    <img style={{marginTop:'5rem'}} src={LoginImg}/>
                    <h2 style={{color:'white' , margin:'2rem 8rem'}}>BOOK TICKETS | EARN POINTS</h2>
                </div>
                </Col>
                <Col>
                <div className="login-form">
                    <Card style={{ width: '22rem' , height:"25rem" ,borderRadius:'15px'}}>
                        <Card.Body>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className="email" type="email" placeholder="Enter email" style={{marginTop:'3rem'}}
                                     onChange={(e) => {setEmail(e.target.value)}}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className="login-password" type="password" placeholder="Password" />
                                </Form.Group>

                                <Button className="login-button" variant="primary" type="submit" onClick={handleEmail}>
                                  Login
                                </Button>
                            </Form>
                           <h5 className="login-to-signup" onClick={() =>{navigate('/signup')}}>New to TicketBox ? <br /> Click here... </h5> 
                        </Card.Body>
                    </Card>
                </div>
                </Col>
            </Row>
        </div>
    )
}