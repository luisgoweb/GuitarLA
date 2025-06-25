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

//Cantidad maxima carrito
const MAX_ITEM = 5;
const MIN_ITEM = 1;

export const cartReducer = (
        state: CartState = initialState,
        action: CartActions
        )=>{

    
        if(action.type === 'addToCart'){

            const itemExist = state.cart.find(guitar => guitar.id === action.payload.item.id)

            let updateCart : CartItem[] = []
            if(itemExist){
            updateCart = state.cart.map(item => {
                if(item.id === action.payload.item.id){
                    if(item.quantity < MAX_ITEM){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                }else{
                    return item
                }
            })
                
            }else{
                const newItem: CartItem = {...action.payload.item, quantity: 1}
                updateCart= [...state.cart, newItem]
        }


            return{
                ...state,
                cart: updateCart
            }
        }

        if(action.type === 'deleteToCart'){
            return{
                ...state
            }
        }

        if(action.type === 'increaseQuantity'){
            return{
                ...state
            }
        }

        if(action.type === 'decreaseQuantity'){
            return{
                ...state
            }
        }

        if(action.type === 'clear-cart'){
            return{
                ...state
            }
        }
        

        return state

        }
