import Button from "../Button/Button"
import style from './card.module.css'

function Card({name,category,price,image,}) {
  return (
    <div className={style.card}>
    <img src={image} alt="" />
    <h3>{name}</h3>
    <h5>{category}</h5>
    <h4>{price}</h4>
    <Button/>
    <Button/>
    </div>
  )
}

export default Card
