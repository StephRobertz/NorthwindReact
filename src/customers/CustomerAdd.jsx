import React, {useState} from "react"
import '../App.css'
import CustomerService from '../Services/Customer'


//propsina välitetään setadding funktio joka piilottaa..
const CustomerAdd = ({setAdding, setMessage, setIsPositive, setShowMessage}) => {

    // State määritys
  const [CustomerId, setCustomerId] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [ContactName, setContactName] = useState('');
  const [ContactTitle, setContactTitle] = useState('');
  const [Address, setAddress] = useState('');
  const [City, setCity] = useState('');
  const [Country, setCountry] = useState('');
  const [Region, setRegion] = useState('');
  const [PostalCode, setPostalCode] = useState('');
  const [Phone, setPhone] = useState('');
  const [Fax, setFax] = useState('');

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()
    var newCustomer = {
      customerId: CustomerId.toUpperCase(),
      companyName: CompanyName,
      contactName: ContactName,
      contactTitle: ContactTitle,
      country: Country,
      address: Address,
      city: City,
      region: Region,
      postalCode: PostalCode,
      phone: Phone,
      fax: Fax
  }
  
  CustomerService.addNew(newCustomer)
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
        <h4>Adding new Customer</h4>
        <form onSubmit={submitForm}>
            <input type="text" minLength={5} maxLength={5} value={CustomerId} onChange={({target}) => setCustomerId(target.value)} placeholder="ID" /><br></br>
            <input type="text" value={CompanyName} onChange={({target}) => setCompanyName(target.value)} placeholder="Company name" /><br></br>
            <input type="text" value={ContactName} onChange={({target}) => setContactName(target.value)} placeholder="Contact name" /><br></br>
            <input type="text" value={ContactTitle} onChange={({target}) => setContactTitle(target.value)} placeholder="Contact title" /><br></br>
            <input type="text" value={Address} onChange={({target}) => setAddress(target.value)} placeholder="Address" /><br></br>
            <input type="text" value={City} onChange={({target}) => setCity(target.value)} placeholder="City" /><br></br>
            <input type="text" value={Country} onChange={({target}) => setCountry(target.value)} placeholder="Country" /><br></br>
            <input type="text" value={Region} onChange={({target}) => setRegion(target.value)} placeholder="Region" /><br></br>
            <input type="text" value={PostalCode} onChange={({target}) => setPostalCode(target.value)} placeholder="Postal code" /><br></br>
            <input type="text" value={Phone} onChange={({target}) => setPhone(target.value)} placeholder="Phone" /><br></br>
            <input type="text" value={Fax} onChange={({target}) => setFax(target.value)} placeholder="Fax" /><br></br><br></br>
            <input type="submit" value="Save" />
            <button onClick={ () => setAdding(false)}>Back</button>
        </form>      
    </div>
    </div>
  )
}

export default CustomerAdd