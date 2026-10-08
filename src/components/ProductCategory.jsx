

function ProductCategory({category,setCategory}) {
      
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">all category</option>
                <option value="clothes">clothes</option>
                <option value="electronics">electronics</option>
                <option value="books">books</option>
                <option value="accessories">accessories</option>
                <option value="shoes">shoes</option>
              </select>
    </div>
  )
}

export default ProductCategory
