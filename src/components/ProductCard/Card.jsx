
import style from "./card.module.css";
// `${}`
function Card({ Product, deleteProduct,fav}) {
  console.log(Product.id);
  // console.log(Product);
  // console.log(deleteProduct);
  console.log();

  return (
    <div className={style.cardo}>
      <div className={style.card}>
        <div className={style.cardInfo}>
          <img src={Product.image} alt="" />

          <div className={style.right}>
            <h2>{Product.name}</h2>
            <h4>{Product.category}</h4>
            <h3>{Product.price}</h3>
          </div>
        </div>

        <div className={style.button}>
          <button onClick={()=>fav(Product.id)}>fav </button>
          
          <p>favourite : {Product.isFavourite ? "yes" : "no" }</p> 
          <button onClick={() => deleteProduct(Product.id)}>delete</button>
          {/* <button onClick={()=>deleteProduct(Product.id)}>delete</button> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
