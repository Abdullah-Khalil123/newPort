import React, { MouseEventHandler } from 'react'
import style from './button.module.css'

const Button = ({
  styles,
  text,
  onClick,
}: {
  styles?: React.CSSProperties
  text?: String
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button className={style.button} style={styles} onClick={onClick}>
      <p>{text}</p>
    </button>
  )
}

export default Button
