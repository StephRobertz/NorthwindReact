import React, {useState} from "react"
import '../App.css'
import ProductService from '../Services/Product'


//propsina välitetään setadding funktio joka piilottaa..
const ProductEdit = ({setEditing, setMessage, setIsPositive, setShowMessage, product}) => {

    // State määritys
  const [ProductId, setProductId] = useState(product.productId);
  const [ProductName, setProductName] = useState(product.productName);
  const [QuantityPerUnit, setQuantityPerUnit] = useState(product.quantityPerUnit);
  const [UnitPrice, setUnitPrice] = useState(product.unitPrice);
  const [UnitsInStock, setUnitsInStock] = useState(product.unitsInStock);
  const [UnitsOnOrder, setUnitsOnOrder] = useState(product.unitsOnOrder);
  const [ReorderLevel, setReorderLevel] = useState(product.reorderLevel);
  const [Discontinued, setDiscontinued] = useState(product.discontinued);
 const [ImageLink, setImageLink] = useState(product.imageLink);


  

  // Formin submitointifunktio
  const submitForm = (event) => {
    event.preventDefault()
    var newProduct = {
      productId: product.ProductId,
      productName: ProductName,
      quantityPerUnit: QuantityPerUnit,
      unitPrice: UnitPrice,
      unitsInStock: UnitsInStock,
      unitsOnOrder: UnitsOnOrder,
      reorderLevel: ReorderLevel,
      discontinued: Discontinued,
      imageLink: ImageLink
    }
  




  ProductService.update(newProduct)
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
     <h4>Editing Product {product.productName}</h4>
        <form onSubmit={submitForm}>
            <lable>ID</lable> <input type="text" disabled value={ProductId} onChange={({target}) => setProductId(target.value)} placeholder="ID" /><br></br>
            <input type="text" value={ProductName} onChange={({target}) => setProductName(target.value)} placeholder="Product name" /><br></br>
            <input type="text" value={QuantityPerUnit} onChange={({target}) => setQuantityPerUnit(target.value)} placeholder="QuantityPerUnit" /><br></br>
            <input type="text" value={UnitPrice} onChange={({target}) => setUnitPrice(target.value)} placeholder="UnitPrice" /><br></br>
            <input type="text" value={UnitsInStock} onChange={({target}) => setUnitsInStock(target.value)} placeholder="UnitsInStock" /><br></br>
            <input type="text" value={UnitsOnOrder} onChange={({target}) => setUnitsOnOrder(target.value)} placeholder="UnitsOnOrder" /><br></br>
            <input type="text" value={ReorderLevel} onChange={({target}) => setReorderLevel(target.value)} placeholder="ReorderLevel" /><br></br>
            <input type="text" value={Discontinued} onChange={({target}) => setDiscontinued(target.value)} placeholder="Discontinued" /><br></br>
            <input type="text" value={ImageLink} onChange={({target}) => setImageLink(target.value)} placeholder="Postal code" /><br></br>
            
            <input type="submit" value="Save" />
            <button onClick={ () => setEditing(false)}>Back</button>
        </form>      
    </div>
    </div>
  )
}

export default ProductEdit