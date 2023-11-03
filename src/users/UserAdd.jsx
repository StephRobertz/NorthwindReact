import React, {useState} from "react"
import '../App.css'
import UserService from '../Services/User'


//propsina välitetään setadding funktio joka piilottaa..
const UserAdd = ({setAdding, setMessage, setIsPositive, setShowMessage}) => {

    // State määritys
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [AccessLevelId, setAccessLevelId] = useState(0);
  

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()

    if (password.lenght < 8 )
{
    alert("Password must be at least 8 characters.")
    return
}
    var newUser = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
      phone: phone,
      accessLevelId: AccessLevelId
      
  }
  
  UserService.addNew(newUser)
  .then(data => {
    setMessage(data)
    setIsPositive(true)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
      window.location.reload()
      
  }, 4000);

  }
  )
  .catch (error => {
    setMessage(error.message)
    setIsPositive(false)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
      window.location.reload()
  }, 6000);


  }
  )

 
  }
  
  return(
  <div className="add-container">
     <div className="add">
        <h4>Adding new User</h4>
        <form onSubmit={submitForm}>
           
            <input type="text" value={firstName} onChange={({target}) => setFirstName(target.value)} placeholder="Firstname" /><br></br>
            <input type="text" value={lastName} onChange={({target}) => setLastName(target.value)} placeholder="Lastname" /><br></br>
            <input type="text" value={userName} onChange={({target}) => setUserName(target.value)} placeholder="Username" /><br></br>
            <input type="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="Password" /><br></br>
            <input type="text" value={phone} onChange={({target}) => setPhone(target.value)} placeholder="Phone" /><br></br>
            <input type="number" value={AccessLevelId} onChange={({target}) => setAccessLevelId(target.value)} placeholder="Accesslevel id" /><br></br>
            
            <input type="submit" value="Save" />
            <button onClick={ () => setAdding(false)}>Back</button>
        </form>      
    </div>
    </div>
  )
}

export default UserAdd