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

const localStorageCart = () => {
    const getLocalstorage = localStorage.getItem('cart')
    return getLocalstorage ? JSON.parse(getLocalstorage) : []
}

export const initialState : CartState = {
    data: db,
    cart: localStorageCart()
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
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        }

        if(action.type === 'increaseQuantity'){

            const updateCart = state.cart.map(guitar => {
                if(guitar.id === action.payload.id && guitar.quantity < MAX_ITEM){
                    return {...guitar, quantity: guitar.quantity + 1}
                }
                return guitar
            })
            

            return{
                ...state,
                cart: updateCart
            }
        }

        if(action.type === 'decreaseQuantity'){

                const updateCart = state.cart.map(guitar => {
                if(guitar.id === action.payload.id && guitar.quantity > MIN_ITEM){
                    return {...guitar, quantity: guitar.quantity - 1}
                }
                return guitar
            })
           
            return{
                ...state,
                cart: updateCart
            }
        }

        if(action.type === 'clear-cart'){
            return{
                ...state,
                cart: []
            }
        }
        

        return state

        }
