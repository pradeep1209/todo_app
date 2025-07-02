const Button = ({children, onClick, buttonStyle}) => {
  return (
    <button onClick={onClick} className={buttonStyle}>{children}</button>
  )
}

export default Button