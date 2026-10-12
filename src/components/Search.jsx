

function Search({setSearch}) {
  return (
    <div className="ProductSearch">
      <input type="search" placeholder="search products..." onChange={(e)=>setSearch(e.target.value)}/>
      
    </div>
  )
}

export default Search
