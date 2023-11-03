import React, {useState, useEffect} from "react"
import '../App.css'
import UserService from '../Services/User'
import UserAdd from "./UserAdd"


const UserList = ({setMessage, setIsPositive, setShowMessage}) => {

    //State määritys
    const [users, setUsers] = useState([])
    //const [search, setSearch] = useState("")
    const [adding, setAdding] = useState(false)
    //const [reload, setReload] = useState(false)

    //Use effect hook funktio tulee ajetuksi aina alussa kerran
    useEffect(() => {
        UserService.getAll() //Käytetään services kansiossa oleva palvelin
        .then(data => setUsers(data))
    },
    [])

return(
    <div className="customers">
        <h2>Users</h2>

        {!adding && <button onClick={() => setAdding(true)}>Add new user</button>}

        
        {adding && <UserAdd setAdding={setAdding} 
        setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>} 


        {/* hakukenttä jonka muutos muuttaa search nimistä statea */}
       <br></br> 
       {/* <input onChange={({target}) => setSearch(target.value)}type="text" placeholder="Search by companyname"></input> */}

{/* Jos data saapunut niin userit loopataan läpi ja renderöidään */}

        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>UserName</th>
                <th>Admin</th>

                </tr>
            </thead>
            <tbody>
                {users && users.map(u => 
                    <tr key ={u.userId}>
                       <td>{u.firstName} {u.lastname}</td>
                       <td>{u.phone}</td>
                       <td>{u.userName}</td>
                       {u.accessLevelId >1 ? <td>No</td> : <td>Yes</td>}
                    </tr>
                    )}
            </tbody>
        </table>

   


    </div>
    )
}
export default UserList