import React, {useState} from "react"
import '../App.css'
import CustomerService from '../Services/Customer'


//propsina välitetään setadding funktio joka piilottaa ja piilottaa formin jos niin halutaan
const CustomerEdit = ({setEditing, setMessage, setIsPositive, setShowMessage, customer}) => {

    // State määritys
  const [CustomerId, setCustomerId] = useState(customer.customerId);
  const [CompanyName, setCompanyName] = useState(customer.companyName);
  const [ContactName, setContactName] = useState(customer.contactName);
  const [ContactTitle, setContactTitle] = useState(customer.contactTitle);
  const [Address, setAddress] = useState(customer.address);
  const [City, setCity] = useState(customer.city);
  const [Country, setCountry] = useState(customer.country);
  const [Region, setRegion] = useState(customer.region);
  const [PostalCode, setPostalCode] = useState(customer.postalCode);
  const [Phone, setPhone] = useState(customer.phone);
  const [Fax, setFax] = useState(customer.fax);

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()
    var newCustomer = {
      customerId: customer.CustomerId,
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
  
  
  CustomerService.update(newCustomer)
  .then(data => {
    setMessage(data)
    setIsPositive(true)
    setShowMessage(true)
    window.scrollTo(0,0)

    setTimeout(() => {
      setShowMessage(false)
      window.location.reload()
       }, 4000);

  })

  .catch (error => {
    setMessage(error.message)
    setIsPositive(false)
    setShowMessage(true)
    window.scrollTo(0,0)
    
    setTimeout(() => {
      setShowMessage(false)
      window.location.reload()
  }, 6000);


  })

  }
  
 

 return(
  <div className="add-container">
     <div className="add">
        <h4>Editing Customer {customer.companyName}</h4>
        <form onSubmit={submitForm}>
            <lable>ID</lable><input type="text" disabled value={CustomerId} onChange={({target}) => setCustomerId(target.value)} placeholder="ID" /><br></br>
            <input type="text" value={CompanyName} onChange={({target}) => setCompanyName(target.value)} placeholder="Company name" /><br></br>
            <input type="text" value={ContactName} onChange={({target}) => setContactName(target.value)} placeholder="Contact name" /><br></br>
            <input type="text" value={ContactTitle} onChange={({target}) => setContactTitle(target.value)} placeholder="Contact title" /><br></br>
            <input type="text" value={Address} onChange={({target}) => setAddress(target.value)} placeholder="Address" /><br></br>
            <input type="text" value={City} onChange={({target}) => setCity(target.value)} placeholder="City" /><br></br>
            <input type="text" value={Country} onChange={({target}) => setCountry(target.value)} placeholder="Country" /><br></br>
            <input type="text" value={Region} onChange={({target}) => setRegion(target.value)} placeholder="Region" /><br></br>
            <input type="text" value={PostalCode} onChange={({target}) => setPostalCode(target.value)} placeholder="Postal code" /><br></br>
            <input type="text" value={Phone} onChange={({target}) => setPhone(target.value)} placeholder="Phone" /><br></br>
            <input type="text" value={Fax} onChange={({target}) => setFax(target.value)} placeholder="Fax" /><br></br>
            <input type="submit" value="Save" />
            <button onClick={ () => setEditing(false)}>Back</button>
        </form>      
    </div>
    </div>
  )
}

export default CustomerEdit