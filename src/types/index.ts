export type guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = guitar & {
    quantity: number
}

