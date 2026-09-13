// import { useState } from 'react'
import style from './Button.module.css'


function Button(props) {
    // const [isFavourite,setIsFavourite]=useState(false)
  return (
    <div > 
      <button className={style.button} onClick={props.onClick}>
           {props.Button}</button>
    </div>
  )
}

export default Button

