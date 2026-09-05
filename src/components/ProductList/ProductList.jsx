import Card from "../ProductCard/Card"




function ProductList({Products}) {
    console.log(Products);
    
    
  return (
    <div>
        {
            Products.map((Product)=>(
                <Card key={Product.id} Product={Product} />
            ))
        }

    </div>
  )
}

export default ProductList
