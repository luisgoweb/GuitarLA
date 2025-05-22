import { useState } from "react"
import { db } from "../data/db"
import type { CartItem, guitar } from "../types"

    export const useCart = () => {

        const[data] = useState(db)
        const[cart, setCart] = useState<CartItem[]>([])

        const addToCart = (item: guitar) => {

            const itemExist = cart.findIndex(guitar => guitar.id === item.id)
            if(itemExist >= 0){
                const updateCart = [...cart]
                updateCart[itemExist].quantity++
                setCart(updateCart)
            }else{
                const newItem: CartItem = {...item, quantity: 1}
                setCart([...cart, newItem])
        }
            }
            

        return{
            data,
            addToCart
        }
    }