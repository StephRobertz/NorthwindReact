import React, {useState} from "react"
import '../App.css'
import CustomerService from '../Services/Customer'
import CustomerEdit from "./CustomerEdit"

//Komponentti saa propsina näyttettävän asiakas olion CustomerListin loopista jossa komponenttia kutsutaan
const Customer = ({customer,setMessage, setIsPositive, setShowMessage}) => {

    //State määritys
    const [showDetails, setShowDetails] = useState(false)
    const [editing, setEditing] = useState(false)

    //Poistofunktio
    const remove = (customer) => {
        let answer = window.confirm("Removing customer " + customer.companyName)
        if (answer === false){
            return
        }
        CustomerService.remove(customer.customerId)
        .then(data =>{
            setMessage(data)
            setIsPositive(true)
            setShowMessage(true)
            window.scrollBy(0, 0) // Scrollataan ylös jotta nähdään alert :)
            setTimeout(() =>{
                setShowMessage(false)
                window.location.reload()
            }, 4000)
        })
        .catch(error => {
            setMessage(error.response.data)
            setIsPositive(false)
            setShowMessage(true)
            window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
        })
            setTimeout(() => {
                setShowMessage(false)
            }, 7000)  

    }
    

   

return(
    <div>
        
     <h4 onClick={() => setShowDetails(!showDetails)}>{customer.companyName}</h4>
     {showDetails &&
     
     <div className="customerDetails" > 
    <button className="btnX" onClick={() => setShowDetails(!showDetails)}>x</button>
     <h3>{customer.companyName}</h3>


     {/* Editointi */}

     {editing && <CustomerEdit setEditing={setEditing} 
        setMessage={setMessage} setIsPositive={setIsPositive}
        setShowMessage={setShowMessage} customer={customer} />}

        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => remove(customer)}>Delete</button>
        

        <table>
            <thead>
                <tr>
                    <th>Contact name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Phone</th>
                    
                   
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{customer.contactName}</td>
                    <td>{customer.address}</td>
                    <td>{customer.city}</td>
                    <td>{customer.country}</td>
                    <td>{customer.phone}</td>
                </tr>
            </tbody>
        </table>

     </div>
     }

    </div>
    )
}
export default Customer