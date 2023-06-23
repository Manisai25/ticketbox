import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button ,Col ,Row } from "react-bootstrap";

export default function SeatSelection(){

    const location = useLocation();
    const navigate = useNavigate()
    const {title} = location.state;
    const [seatMatrix , setSeatMatrix] = useState([]);
    const [selectedSeats , setSelectedSeats] = useState([]);

    let createSeats = () =>{
        let totalRows = 5;
        let totalNumberOfSeatsInaRow = 8;
        let tempRows = [];
        let row = 0
        let ch = 'A';
        while(row < totalRows){
            let col = 1;
            let rowArr = [];
            while(col <= totalNumberOfSeatsInaRow){
                 rowArr.push(ch+col);
                 col++
            }
            tempRows.push(rowArr)
            row++ 
            ch = String.fromCharCode(ch.charCodeAt(0) + 1)

        }
        console.log(tempRows)
        setSeatMatrix(tempRows)
    }

    useEffect(() => {createSeats()} , [])

    const handleSelection = (newSeat) =>{
        setSelectedSeats([...selectedSeats , ...newSeat])
    }

    return(
        <div style={{padding:'1rem'}}>
            <h3 className="d-inline-block">{title}</h3>
            <h5 style={{marginLeft:'20rem'}} className="d-inline-block">Screen</h5>
            <div style={{borderBottom:'2px solid black'}}>
                {
                    seatMatrix.map((seatArr , index) => {
                       
                        return(
                            <div key={index} style={{width:'90%' , display:"flex" , alignItems:'center' , justifyContent:'space-around' , marginLeft:'4.5rem'}}>
                                {
                                    seatArr.map((seat , index) => {
                                        let isSelected =  selectedSeats.indexOf(seat) > -1 ;
                                        return(
                                            <button style={{ backgroundColor: isSelected ? 'green' : 'red'  }} className="seat-button" key={index} onClick={() => {handleSelection(seat)}} >{seat}</button>
                                        
                                        )
                                    })
                                    
                                }
                            </div>
                            
                        )
                    })
                }
            </div>
            <div style={{marginTop:'0.5rem'}}>
                {selectedSeats.length > 0 ? 
                <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-around'}}>
                    <div>
                    {
                        selectedSeats.map((seat) =>{
                            return  <span style={{fontSize:'1.1rem'}}>{seat}</span> 
                            
                        })
                        
                    }
                     <h3>Seats Selected </h3>
                    </div>
                   
                    <div style={{fontSize:'1.1rem' , fontWeight:'bold'}}> Total Price :-{selectedSeats.length * 100 } </div>
                    <Button onClick={() => navigate('/checkout') }>Check out</Button> 
                </div> :  
                <div>No Seat's Selected</div>}
            </div>
           
        </div>
    )
}