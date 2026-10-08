import Card from "../ProductCard/Card";
import style from "./ProductList.module.css";

function ProductList({ Products, deleteProduct ,fav }) {
  console.log(Products);

  return (
    <div className={style.list}>
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
