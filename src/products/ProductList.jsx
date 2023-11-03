import React, {useState, useEffect} from "react"
import '../App.css'
import ProductService from '../Services/Product'
import Product from "./Product"
import ProductAdd from "./ProductAdd"

const ProductList = ({setMessage, setIsPositive, setShowMessage}) => {

    //State määritys
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [adding, setAdding] = useState(false)
    //const [reload, setReload] = useState(false)

    //Use effect hook funktio tulee ajetuksi aina alussa kerran
    useEffect(() => {
        // let token = localStorage.getItem("token")
        // ProductService.setToken(token)

        ProductService.getAll() //Käytetään services kansiossa oleva palvelin
        .then(data => setProducts(data))
    },
    [])

return(
    <div className="customers">
        <h2>Products</h2>

        {!adding && <button onClick={() => setAdding(true)}>Add new product</button>}
        {adding && <ProductAdd setAdding={setAdding} 
        setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>} 


        {/* hakukenttä jonka muutos muuttaa search nimistä statea */}
       <br></br> 
       <input onChange={({target}) => setSearch(target.value)}type="text" placeholder="Search by productname"></input>

{/* Jos data saapunut niin productit loopataan läpi ja renderöidään */}

        {products && products.map(p => {
            let lowerCaseName = p.productName.toLowerCase()
            if (lowerCaseName.indexOf(search.toLowerCase()) > -1) {
                return(
           <Product key={p.productId} product={p}
           setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} />
           )
        }
        }
        )}


    </div>
    )
}
export default ProductList