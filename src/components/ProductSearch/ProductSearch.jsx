import { useState } from 'react'
import style from './ProductSearch.module.css'

function ProductSearch() {
    const [product,setProduct]=useState()
  return (
    <div className={style.ProductSearch}>
      <h3>total product : </h3>
      <input type="search" name="" id="" placeholder='search product...'/>
      
      <select  value={product} onChange={(e)=>setProduct(e.target.value)}>
        <option value="" >all category</option>
        <option value="clothes">clothes</option>
        <option value="electronics">electronics</option>
        <option value="books">books</option>
        <option value="accessories">accessories</option>
        <option value="shoes">shoes</option>
      </select>
    </div>
  )
}

export default ProductSearch
