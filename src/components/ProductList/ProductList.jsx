import Card from "../ProductCard/Card";


function ProductList({ Products, deleteProduct ,fav }) {
  console.log(Products);

  return (
    <div className="list">
      {Products.map((Product) => (
        <Card
          key={Product.id}
          Product={Product}
          deleteProduct={deleteProduct}
          fav={fav}
        />
      ))}
    </div>
  );
}

export default ProductList;
