

function Search({setSearch}) {
  return (
    <div>
      <input type="search" onChange={(e)=>setSearch(e.target.value)}/>
      <h2>search</h2>
    </div>
  )
}

export default Search
