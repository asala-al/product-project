

import { useState } from "react"
import ProductForm from "../ProductForm/ProductForm"
import ProductList from "../ProductList/ProductList"



function ProductManager() {
    const [Products,setProducts]=useState([]);
    console.log(Products);
    

    // function addProducts(s) {
    //     setProducts({...s,id:Date.now(),});
    // }
    function addProducts(s) {
  const newProduct = {
    ...s,
    id: Date.now(),
  };

  setProducts([...Products, newProduct]);
}

    function deleteProduct(id) {
      setProducts(Products.filter((product)=>product.id !== id))
    }

  return (
    <div>
      
      
      <ProductForm add={addProducts} />
      <ProductList Products={Products} deleteProduct={deleteProduct}/>
    </div>
  )
}

export default ProductManager
