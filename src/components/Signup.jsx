import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Row , Col } from "react-bootstrap";
import LoginImg from '../assets/img1.png';
import { useNavigate } from "react-router-dom";

export default function Signup( {setUser}){

       const [email , setEmail] = useState('')
       const navigate = useNavigate();

       function handleEmail(){
          localStorage.setItem('userEmail' ,email)
        //   setUser(email)
          navigate('/login')
         setEmail('')
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
                <Card style={{ width: '22rem' , height:"28rem" ,borderRadius:'15px'}}>
                    <Card.Body>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="email" type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}  value={email}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="login-password" type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control className="login-password" type="password" placeholder="Re-Enter Password" />
                            </Form.Group>

                            <Button className="login-button" variant="primary" type="submit" onClick={handleEmail}>
                              Signup
                            </Button>
                     </Form>
                       <h5 className="login-to-signup" onClick={() => {navigate('/login')}} >Already a member !<br /> Click here... </h5>                        </Card.Body>
                </Card>
            </div>
            </Col>
        </Row>
    </div>
    )
}