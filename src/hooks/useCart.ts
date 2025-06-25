import { useEffect, useState } from "react"
import type { CartItem, guitar } from "../types"

    export const useCart = () => {

        const initialState = () => {
            const getLocalstorage = localStorage.getItem('cart')
            return getLocalstorage ? JSON.parse(getLocalstorage) : []
        }

     
        const[cart, setCart] = useState<CartItem[]>(initialState)

        useEffect(()=>{
            localStorage.setItem('cart', JSON.stringify(cart))
        },[cart])

        //Cantidad maxima carrito
        const MAX_ITEM = 5;
        const MIN_ITEM = 1;

        

            const deleteToCart = (id: guitar['id']) => {
                setCart(prevCart => prevCart.filter(item => item.id !== id))
            }

            const increaseQuantity = (id: guitar['id']) => {
                const updateCart = cart.map(guitar => {
                    if(guitar.id === id && guitar.quantity < MAX_ITEM){
                        return {...guitar, quantity: guitar.quantity + 1}
                    }
                    return guitar
                })
                setCart(updateCart)
                
            }

            const decreaseQuantity = (id: guitar['id']) => {
                const updateCart = cart.map(guitar => {
                    if(guitar.id === id && guitar.quantity > MIN_ITEM){
                        return {...guitar, quantity: guitar.quantity - 1}
                    }
                    return guitar
                })
                setCart(updateCart)
                
            }
            

        return{
           
            cart,
            setCart,
            deleteToCart,
            increaseQuantity,
            decreaseQuantity
        }
    }