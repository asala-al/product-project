import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";

function ProductManager() {
  const [Products, setProducts] = useState([]);

  console.log(Products);

  function addProducts(s) {
    setProducts([...Products, s]);
  }

  function deleteProduct(id) {
    setProducts(Products.filter((Product) => Product.id !== id));
  }
  // console.log(deleteProduct);

  return (
    <div>
      <ProductForm add={addProducts} deleteProduct={deleteProduct} Products={Products}/>
      <ProductList Products={Products} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductManager;
