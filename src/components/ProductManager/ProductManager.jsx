

import { useState } from "react"
import ProductForm from "../ProductForm/ProductForm"
import ProductList from "../ProductList/ProductList"



function ProductManager() {
    const [Products,setProducts]=useState([]);
    console.log(Products);
    

    function addProducts(s) {
        setProducts([...Products,s]);
    }


  return (
    <div>
      
      
      <ProductForm add={addProducts} />
      <ProductList Products={Products}/>
    </div>
  )
}

export default ProductManager
