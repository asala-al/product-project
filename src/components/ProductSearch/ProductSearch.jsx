import style from './ProductSearch.module.css'

function ProductSearch() {
  return (
    <div className={style.ProductSearch}>
      <h3>total product : </h3>
      <input type="search" name="" id="" placeholder='search product...'/>
      <input type="text" placeholder='All products'/>
    </div>
  )
}

export default ProductSearch
