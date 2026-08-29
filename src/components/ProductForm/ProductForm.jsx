
import { useState } from 'react'
import style from './ProductForm.module.css'


function ProductForm() {
const [name,setName]=useState()
const [price,setPrice]=useState()
const [image,setImage]=useState()

    function handleSubmit(e) {
        e.preventdefault()
    }

  return (
   <div>
     <div className={style.ProductForm}>
        <h3>Add New Product</h3>
    <div className={style.form}>
      
      <form onSubmit={handleSubmit}>
        <input type="text" id={name} placeholder="enter product name" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" id={price} placeholder="enter price" onChange={(e)=>setPrice(e.target.value)}/>
      <input type="text" placeholder="select category" onChange={(e)=>(e.target.value)}/>
      <input type="text" id={image} placeholder="enter image url" onChange={(e)=>setImage(e.target.value)}/>
      </form>
      <button>Add Product</button>
    </div>

    </div>
   </div>
  )
}

export default ProductForm
