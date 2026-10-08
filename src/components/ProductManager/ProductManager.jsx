import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import Search from "../Search";
// import ProductSearch from "../productSearch/productSearch";
// import ProductCount from "../productCount/productCount";

function ProductManager() {
  const [Products, setProducts] = useState([]);
  // const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  console.log(Products);

  function addProducts(s) {
    setProducts([...Products, s]);
  }

  function deleteProduct(id) {
    setProducts((s) => s.filter((Product) => Product.id !== id));
  }
  function favourite(id) {
    setProducts((s) =>
      s.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            isFavourite: !product.isFavourite,
          };
        } else return product;
      }),
    );
  }

  const filteredProducts = Products.filter((product) =>product.name.toLowerCase().includes(search.toLowerCase()))

  // function productCount() {

  // }
  return (
    <div>
      <Search setSearch={setSearch}/>
      {/* <ProductCount count={Products.length} /> */}
      {/* <ProductSearch setSearch={setSearch} /> */}
      <ProductForm
        add={addProducts}
        deleteProduct={deleteProduct}
        Products={Products}
      />
      <ProductList
        Products={filteredProducts}
        deleteProduct={deleteProduct}
        fav={favourite}
      />
    </div>
  );
}

export default ProductManager;
