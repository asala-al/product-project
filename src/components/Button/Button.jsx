// import { useState } from 'react'
import style from './Button.module.css'


function Button({children,onClick}) {
    // const [isFavourite,setIsFavourite]=useState(false)

  return (
    <div > 

      <button className={style.button} onClick={onClick}>
        {children}</button>

    </div>
  )
}

export default Button

