import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';



export default function Home(){

    const [movies , setMovies] = useState([])
    const navigate = useNavigate()


    const MOVIE_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f1178f6c67303dd4c33c91a2fea09e5f&language=en-US&page=1'
    // const MOVIE_API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f1178f6c67303dd4c33c91a2fea09e5f&language=en-US&page=1'
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() =>{
        axios.get(MOVIE_API).then((Response) => {
            setMovies(Response.data.results)
            console.log(Response.data.results)
        })
    } , [])

    useEffect(() =>{
        const user = localStorage.getItem('userEmail')
        if(!user){
            navigate('/login')
        }
    }, [])

    return(
        <div style={{display:'flex' , flexWrap:'wrap', alignItems:'center' ,justifyContent:'space-around' , padding:"1rem"}}>
            {
                movies.map((movie) =>{
                    return(
                            <Card key={movie.id} style={{ width: '15rem' , height:"21rem" ,borderRadius:'15px' , margin:'1rem'}}   onClick={() => {navigate(`/movie/${movie.id}`,{state:movie})}}>
                                <Card.Body>
                                    <Card.Img src={IMAGE_API + movie.poster_path} style={{height:'15rem' , marginBottom:'1rem'}}></Card.Img>
                                    <Card.Title >{movie.title}</Card.Title>  
                                </Card.Body>
                            </Card>
                    )
                })
            }
        </div>
    )
}