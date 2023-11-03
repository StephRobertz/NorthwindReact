import React, {useState} from "react"
import '../App.css'
import ProductService from '../Services/Product'


//propsina välitetään setadding funktio joka piilottaa formin jos niin halutaan
const ProductAdd = ({setAdding, setMessage, setIsPositive, setShowMessage}) => {

    // State määritys
  const [ProductId, setProductId] = useState('');
  const [ProductName, setProductName] = useState('');
  const [QuantityPerUnit, setQuantityPerUnit] = useState('');
  const [UnitPrice, setUnitPrice] = useState('');
  const [UnitsInStock, setUnitsInStock] = useState('');
  const [UnitsOnOrder, setUnitsOnOrder] = useState('');
  const [ReorderLevel, setReorderLevel] = useState('');
  const [Discontinued, setDiscontinued] = useState('');
  const [ImageLink, setImageLink] = useState('');
  

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()
    var newProduct = {
      productId: ProductId.toUpperCase(),
      productName: ProductName,
      quantityPerUnit: QuantityPerUnit,
      unitPrice: UnitPrice,
      unitsInStock: UnitsInStock,
      unitsOnOrder: UnitsOnOrder,
      reorderLevel: ReorderLevel,
      discontinued: Discontinued,
      imageLink: ImageLink
    }
  
  ProductService.addNew(newProduct)
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
        <h4>Adding new Product</h4>
        <form onSubmit={submitForm}>
            <input type="text" minLength={5} maxLength={5} value={ProductId} onChange={({target}) => setProductId(target.value)} placeholder="ID" /><br></br>
            <input type="text" value={ProductName} onChange={({target}) => setProductName(target.value)} placeholder="Product name" /><br></br>
            <input type="number" value={QuantityPerUnit} onChange={({target}) => setQuantityPerUnit(target.value)} placeholder="QuantityPerUnit" /><br></br>
            <input type="number" value={UnitPrice} onChange={({target}) => setUnitPrice(target.value)} placeholder="UnitPrice" /><br></br>
            <input type="number" value={UnitsInStock} onChange={({target}) => setUnitsInStock(target.value)} placeholder="UnitsInStock" /><br></br>
            <input type="number" value={UnitsOnOrder} onChange={({target}) => setUnitsOnOrder(target.value)} placeholder="UnitsOnOrder" /><br></br>
            <input type="number" value={ReorderLevel} onChange={({target}) => setReorderLevel(target.value)} placeholder="ReorderLevel" /><br></br>
            <input type="number" value={Discontinued} onChange={({target}) => setDiscontinued(target.value)} placeholder="Discontinued" /><br></br>
            <input type="url" value={ImageLink} onChange={({target}) => setImageLink(target.value)} placeholder="ImageLink" /><br></br>
           
            
            <input type="submit" value="Save" />
            <button onClick={ () => setAdding(false)}>Back</button>
        </form>      
    </div>
    </div>
  )
}

export default ProductAdd