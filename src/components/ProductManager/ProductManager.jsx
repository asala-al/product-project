
import Card from "../ProductCard/Card"
import ProductForm from "../ProductForm/ProductForm"
import ProductSearch from "../ProductSearch/ProductSearch"


function ProductManager() {
  return (
    <div>
      <ProductSearch/>
      <ProductForm/>
      <Card/>
    </div>
  )
}

export default ProductManager
