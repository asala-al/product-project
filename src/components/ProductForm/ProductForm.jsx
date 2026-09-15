import { useState } from "react";
import style from "./ProductForm.module.css";


function ProductForm({ add}) {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [count,setCount]=useState(0)
  const [product,setProduct]=useState()
  const [id,setId]=useState(Date.now)
 
  function handleSubmit(e) {
    e.preventDefault();
    
    setCount(count+1)
    setId(Date.now)
    add({
      id : id ,
      name: name,
      price: price,
      category: category,
      image: image,
    });

    
    
  }
  
  // console.log(product);
  
  console.log(category);

  return (
    <div>
      <div className={style.ProductSearch}>
      <h3>total product : {count}</h3>
      <input type="search" name="" id="" placeholder='search product...'/>
      
      <select  value={product} onChange={(e)=>setProduct(e.target.value)}>
        <option value="" >all category</option>
        <option  value="clothes">clothes</option>
        <option value="electronics">electronics</option>
        <option value="books">books</option>
        <option value="accessories">accessories</option>
        <option value="shoes">shoes</option>
      </select>
    </div>


      <div className={style.ProductForm}>
        <h3>Add New Product</h3>
        <div className={style.form}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="enter product name"
              onChange={(e) => setName(e.target.value)}
            />
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
            
            <select   value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="" >all category</option>
            <option  value="clothes">clothes</option>
            <option value="electronics">electronics</option>
            <option value="books">books</option>
            <option value="accessories">accessories</option>
            <option value="shoes">shoes</option>
            </select>

            <input
              type="text"
              value={image}
              placeholder="enter image url"
              onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
