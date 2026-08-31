
import { useState } from 'react'
import style from './ProductForm.module.css'


function ProductForm({add}) {
const [name,setName]=useState()
const [price,setPrice]=useState()
const [image,setImage]=useState()

    function handleSubmit(e) {
        e.preventdefault()

        add([name,price,image])
    }

  return (
   <div>
     <div className={style.ProductForm}>
        <h3>Add New Product</h3>
    <div className={style.form}>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="enter product name" onChange={(e)=>setName(e.target.value)}/>
      <input type="number" value={price} placeholder="enter price" onChange={(e)=>setPrice(e.target.value)}/>
      <input type="text" placeholder="select category" onChange={(e)=>(e.target.value)}/>
      <input type="text" value={image} placeholder="enter image url" onChange={(e)=>setImage(e.target.value)}/>
      <button type='submit'>Add Product</button>
      </form>
      
    </div>

    </div>
   </div>
  )
}

export default ProductForm
