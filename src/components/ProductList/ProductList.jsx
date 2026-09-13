import Card from "../ProductCard/Card"
import style from "./ProductList.module.css"



function ProductList({Products,deleteProduct}) {
    console.log(Products);
    
    console.log();
    
    
  return (
    <div className={style.list}>
        {
            Products.map((Product)=>(
                <Card key={Product.id} Product={Product} deleteProduct={deleteProduct}/>
            ))
        }

    </div>
  )
}

export default ProductList
