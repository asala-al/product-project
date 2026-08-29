import style from './Button.module.css'

function Button(props) {
    
  return (
    <div>
      <button className={style.button}>{props.Button}</button>
    </div>
  )
}

export default Button

