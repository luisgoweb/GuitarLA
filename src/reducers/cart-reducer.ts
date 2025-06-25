import { db } from "../data/db"
import type { CartItem, guitar } from "../types"


export type CartActions = 
    {type: 'addToCart', payload: {item: guitar}} |
    {type: 'deleteToCart', payload: {id: guitar['id']}} |
    {type: 'increaseQuantity', payload: {id: guitar['id']}} |
    {type: 'decreaseQuantity', payload: {id: guitar['id']}} |
    {type: 'clear-cart'}

export type CartState = {
    data: guitar[],
    cart: CartItem[]
}

export const initialState : CartState = {
    data: db,
    cart: []
}

export const cartReducer = (
        state: CartState = initialState,
        action: CartActions
        )=>{

        if(action.type === 'addToCart'){
            return{

            }
        }

        if(action.type === 'deleteToCart'){
            return{

            }
        }

        if(action.type === 'increaseQuantity'){
            return{

            }
        }

        if(action.type === 'decreaseQuantity'){
            return{

            }
        }

        if(action.type === 'clear-cart'){
            return{

            }
        }
        

        return state

        }
