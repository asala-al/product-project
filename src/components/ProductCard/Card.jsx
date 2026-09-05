import Button from "../Button/Button";
import style from "./card.module.css";

function Card({ Product}) {
  return (
    <div className={style.cardo}>
      <div className={style.card}>
        <div className={style.cardInfo}>
          <img src={Product.image} alt="" />

          <div className={style.right}>
            <h3>{Product.name}</h3>
            <h5>{Product.category}</h5>
            <h4>{Product.price}</h4>
          </div>
        </div>

        <div className={style.button}>
          <Button Button="Favourite"/>
          <Button Button="Delete"/>
        </div>
      </div>
    </div>
  );
}

export default Card;
