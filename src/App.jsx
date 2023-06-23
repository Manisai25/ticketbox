import './App.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './assets/ticketlogo.png'
import Signup from './components/Signup';
import {Routes , Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home  from './components/Home';
import Movie from './components/Movie'
import SeatSelection from './components/SeatSelection';
import CheckOut from './components/CheckOut';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  
  const [user , setUser] = useState('');

  useEffect(() =>{
    const userEmail = localStorage.getItem('userEmail')
    setUser(userEmail)
  } , [user])

  const handleLogout = () =>{
    navigate('/login')
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="App">
        <Navbar bg="light" variant="light" style={{borderBottom:'1px solid black' , height:'12vh'}}>
          <Container>
            <Navbar.Brand>
              <div className='brand-name'>
                <img
                  alt=""
                  src={Logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />{' '}
                <h3>Ticket Box</h3>
              </div>
            </Navbar.Brand>
            {user && <Button onClick={() => handleLogout()} className='logout-btn'>logout</Button>}
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/signup' element={<Signup setUser={setUser}/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/selectseat' element={<SeatSelection/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>

        </Routes>

    </div>
  )
}

export default App
