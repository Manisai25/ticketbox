import React from "react";
import { Row , Col } from "react-bootstrap";

import Barcode from '../assets/barcode.png'
import Lastimg from '../assets/last.png'

export default function CheckOut(){
    return(
        <div style={{backgroundColor :'#f54236' , height:'85.5vh' , color:'white'}}>
            <Row>
                <Col>
                <div style={{height:'100%',display:'flex', flexDirection:'column' , alignItems:'center' , justifyContent:'center'}}>
                    <img src={Barcode} />
                    <h5 style={{marginTop:'1.5rem '}}>Tickets Conformed</h5>
                    <p>Enjoy Movie...</p>
                </div>
                </Col>
                <Col>
                <img style={{margin:'2rem 6rem'}} src={Lastimg}/>
                </Col>
            </Row>
        </div>
    )
}