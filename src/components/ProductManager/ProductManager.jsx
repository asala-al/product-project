

import { useState } from "react"
import ProductForm from "../ProductForm/ProductForm"
import ProductList from "../ProductList/ProductList"
import ProductSearch from "../ProductSearch/ProductSearch"


function ProductManager() {
    const [products,setProducts]=useState()

    function addProducts(s) {
        setProducts([...products,s])
    }


  return (
    <div>
      <ProductList />
      <ProductSearch />
      <ProductForm add={addProducts} />
      
    </div>
  )
}

export default ProductManager
