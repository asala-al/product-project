import Button from '../Button/Button'
import style from './ProductForm.module.css'


function ProductForm() {
  return (
   <div>
     <div className={style.ProductForm}>
        <h3>Add New Product</h3>
    <div className={style.form}>
      
      <input type="text"  placeholder="enter product name"/>
      <input type="text" placeholder="enter price"/>
      <input type="text" placeholder="select category"/>
      <input type="text" placeholder="enter image url" />
      <Button/>
    </div>

    </div>
   </div>
  )
}

export default ProductForm
