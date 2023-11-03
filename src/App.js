import './App.css'
import Laskuri from './Laskuri'
import React, {useState, useEffect} from 'react'
import Posts from './Posts'
import CustomerList from './customers/CustomerList'
import UserList from './users/UserList'
import Message from './Message'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './users/LoginForm'


const App = () =>{

  // const [showLaskuri, setShowLaskuri] = useState(false)

  const[showMessage, setShowMessage] = useState(false)
  const[message, setMessage] = useState("")
  const[isPositive, setIsPositive] = useState(false)
  const[loggedInUser, setLoggedInUser] = useState("")

// const [showCustomerList, setShowCustomerList] = useState(false)


useEffect(() => {
  let storedUser = localStorage.getItem("username")
  if (storedUser !== null) {
    setLoggedInUser(storedUser)
  }

}, [])

   return (
  
<Router>
  <div>
  {loggedInUser != "" &&
    
     
     <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href='/home' className='nav-link'>Home</Nav.Link>
                <Nav.Link href='/customers' className='nav-link'>Customers</Nav.Link>
                <Nav.Link href='/Products' className='nav-link'>Products</Nav.Link>
                <Nav.Link href='/users' className='nav-link'>Users</Nav.Link>
                <Nav.Link href='/Posts' className='nav-link'>Posts</Nav.Link>
                <Nav.Link href='/Laskuri' className='nav-link'>Laskuri</Nav.Link>
            </Nav>
          </Navbar>}
     
    

     {showMessage && <Message message={message} isPositive={isPositive}/>}

     
     {/* {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>Näytä laskuri</button>}
     {showLaskuri && <button onClick={() => setShowLaskuri(false)}>Piilota laskuri</button>}
     {showLaskuri && <Laskuri/>} */}

     {/* {!showCustomerList && <button onClick={() => setShowCustomerList(true)}>Näytä asiakkaat</button>}
     {showCustomerList && <button onClick={() => setShowCustomerList(false)}>Piilota asiakkat</button>}
     {showCustomerList && <CustomerList setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>} */}

    {loggedInUser == "" && <LoginForm  setIsPositive={setIsPositive} setMessage={setMessage}
     setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser}/>}
     <Routes>
     <Route path='/home'
      element={ <h1>Northwind Corporation</h1>}>
     </Route>

     
      <Route path='/customers'

      element={<CustomerList setMessage={setMessage} 
      setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>}>
     </Route>

     <Route path='/users'
      element={<UserList setMessage={setMessage} 
      setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>}>
     </Route>

     <Route path='/posts' 
     element={<Posts tervehdys="Terve!" info ="Nämä ovat yhtiön sosiaalisen median parhaita poimintoja."/>}>
    </Route>

    <Route path='/laskuri' 
     element={<Laskuri/>}>
    </Route>
      </Routes>
      
     
    </div>
    </Router>
    
  );
}

export default App;
