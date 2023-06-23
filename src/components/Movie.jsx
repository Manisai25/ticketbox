import axios from "axios";
import React, { useEffect } from "react";
import { Row , Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Movie(){
    const navigate = useNavigate()
    const location = useLocation();
    const {title , overview , poster_path } = location.state ;
    const [latLng , setLatLng] = useState({})
    const [theaters , setTheaters] = useState([])
    const timmings = ['11:00 AM' , '02:00 PM' , '06:00 PM' , "09:00 PM"]


    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() =>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) =>{
                setLatLng({
                    lat : position.coords.latitude,
                    lng : position.coords.longitude
                })
            })
        }
    } , [])

    useEffect(() =>{
        if(Object.keys(latLng).length > 0){
    //    const geo_API = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},5000&bias=proximity:77.59508413268529,12.97033725&limit=20&apiKey=cabfcc5b9cec4205a68ffbc576f2e971`
         const geo_API= `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:77.59508413268529,12.97033725,5000&bias=proximity:77.59508413268529,12.97033725&limit=20&apiKey=cabfcc5b9cec4205a68ffbc576f2e971`
          axios.get(geo_API).then((Response) =>{ 
             const featuresArry =   Response.data.features;
             const names = [];
              featuresArry.map((feature) => names.push(feature.properties.name))
              setTheaters(names)
            })

        }
    } , [latLng])

    return(
        <div style={{padding:'1rem 2rem'}}>
            <Row>
                <Col>
                  <div style={{width:'80%' , display:'flex' , flexDirection:'column' , alignItems:'center', marginLeft:'2rem'}}>
                     <img src={IMAGE_API+poster_path} height={350} width={300} style={{borderRadius:'10px' , margin:'1rem' , pointerEvents:'none'}}/>
                     <h2>{title}</h2>
                     <p style={{textAlign:'center' , fontSize:'1.2rem'}}>{overview}</p>
                  </div>
                </Col>
                <Col>
                  <div style={{marginLeft:'6rem'}}>
                    {theaters.map((theater , index) =>{
                        return(
                            <div key={index}>
                              <h5>{theater}</h5>
                              {
                                timmings.map((time) =>{
                                    return(
                                        <Button key={time} style={{margin:'1rem'}} onClick={() => navigate('/selectSeat' , {state:{title : title}})}>{time}</Button>
                                    )
                                })
                              }
                            </div>
                        )
                    })}
                  </div>
                </Col>
            </Row>
        </div>
    )
}