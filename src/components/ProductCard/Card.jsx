
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

        <div className="cardButtons">
          <button  className={Product.isFavourite ? style.favouriteActive : style.isFavourite } 
          onClick={()=>fav(Product.id)} >favourite </button>
          
          {/* <p>favourite : </p>  */}
          <button onClick={() => deleteProduct(Product.id)} className="deleteButton">delete</button>
          {/* <button onClick={()=>deleteProduct(Product.id)}>delete</button> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
