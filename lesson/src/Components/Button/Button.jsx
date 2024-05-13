import "./Button.css"
export const Button=(props)=>{
return(
    <button data-cart type="button" className="btn btn-block btn-outline-warning" onClick={props.onClick}>+ в корзину</button>

)
}