import { useState } from "react";
import style from "./ProductForm.module.css";
// import ProductCount from "../productCount/productCount";

function ProductForm({ add }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [id, setId] = useState(Date.now);
  const [isFavourite, setIsFavourite] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // deleteProduct(setCount[Products.length-1]);
    setId(Date.now);
    add({
      id: id,
      name: name,
      price: price,
      category: category,
      image: image,
      isFavourite: isFavourite,
      // count: count
    });
  }
  // function counts() {
  //

  //   }
  // console.log(product);

  console.log(category);

  return (
    <div className="productform">
      <h3>Add New Product</h3>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="">Product Name</label> */}
          <input
            type="text"
            value={name}
            placeholder="enter product name"
            onChange={(e) => setName(e.target.value)}
          />

          {/* <label htmlFor="">price($)</label> */}
          <input
            type="number"
            value={price}
            placeholder="enter price"
            onChange={(e) => setPrice(e.target.value)}
          />

          {/* <input
              type="text"
              value={category}
              placeholder="select category"
              onChange={(e) => setCategory(e.target.value)}
            /> */}

          {/* <label htmlFor="">Category</label> */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">all category</option>
            <option value="clothes">clothes</option>
            <option value="electronics">electronics</option>
            <option value="books">books</option>
            <option value="accessories">accessories</option>
            <option value="shoes">shoes</option>
          </select>

          {/* <label htmlFor="image">Image URL</label> */}
          <input
            type="text"
            value={image}
            placeholder="enter image url"
            onChange={(e) => setImage(e.target.value)}
          />

          <button type="submit">Add Product</button>
        </form>
      
    </div>
  );
}

export default ProductForm;
