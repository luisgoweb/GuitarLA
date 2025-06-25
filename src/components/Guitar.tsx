import type { Dispatch } from "react"
import type { CartActions } from "../reducers/cart-reducer"
import type { guitar } from "../types"

type GuitarProps = {
    guitar: guitar
    dispatch: Dispatch<CartActions>
    
}

const Guitar = ({guitar, dispatch}: GuitarProps) => {
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`img/${guitar.image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
                    <p>{guitar.description}</p>
                    <p className="fw-black text-primary fs-3">${guitar.price}</p>
                    <button 
                        onClick={()=> dispatch({type: 'addToCart', payload: {item: guitar}})}
                        type="button"
                        className="btn btn-dark w-100"
                    >Agregar al Carrito</button>
                </div>
            </div>
  )
}

export default Guitar
