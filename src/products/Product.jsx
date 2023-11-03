import React, {useState} from "react"
import '../App.css'
import ProductService from '../Services/Product'
import ProductEdit from "./ProductEdit"

//Komponentti saa propsina näyttettävän asiakas olion ProductListin loopista jossa komponenttia kutsutaan
const Product = ({product,setMessage, setIsPositive, setShowMessage}) => {

    //State määritys
    const [showDetails, setShowDetails] = useState(false)
    const [editing, setEditing] = useState(false)

    //Poistofunktio
    const remove = (product) => {
        let answer = window.confirm("Removing product " + product.productName)
        if (answer === false){
            return
        }
        ProductService.remove(product.productId)
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
    <div className="customer-details">
        
     <h4 onClick={() => setShowDetails(!showDetails)}>{product.productName}</h4>
     {showDetails &&
     
     <div className="customerDetails" > 
    <button className="btnX" onClick={() => setShowDetails(!showDetails)}>x</button>
     <h3>{product.productName}</h3>


     {/* Editointi */}

     {editing && <ProductEdit setEditing={setEditing} 
        setMessage={setMessage} setIsPositive={setIsPositive}
        setShowMessage={setShowMessage} product={product} />}
        <div className="btn-div">
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => remove(product)}>Delete</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Product name</th>
                    <th>Quantity Per Unit</th>
                    <th>Unitprice</th>
                    <th>Units in stock</th>
                    <th>Units on orders</th>
                    <th>Image link</th>
                    
                   
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{product.productName}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.unitsInStock}</td>
                    <td>{product.unitsOnOrder}</td>
                    <td>{product.imageLink}</td>
                </tr>
            </tbody>
        </table>

     </div>
     }

    </div>
    )
}
export default Product