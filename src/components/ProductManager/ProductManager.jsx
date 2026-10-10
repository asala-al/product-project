import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import Search from "../Search";
import ProductCategory from "../ProductCategory";
import Counting from "../Counting";

function ProductManager() {
  const [Products, setProducts] = useState([]);
  // const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  console.log(Products);

  function addProducts(s) {
    setProducts([...Products, s]);
    // setCount(Products.length)
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

  const filteredProducts = Products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category)
    );
  });

  return (
    <div className="manager">
      <div className="searching">
        <Counting count={filteredProducts.length} />
      <Search setSearch={setSearch} />
      <ProductCategory setCategory={setCategory} category={category} />
      </div>
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
