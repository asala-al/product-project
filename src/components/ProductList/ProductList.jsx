import Card from "../ProductCard/Card"




function ProductList({Products,deleteProduct}) {
    console.log(Products);
    
    
  return (
    <div>
        {
            Products.map((Product)=>(
                <Card key={Product.id} Product={Product} deleteProduct={deleteProduct}/>
            ))
        }

    </div>
  )
}

export default ProductList
