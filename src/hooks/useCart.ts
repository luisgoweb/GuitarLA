import { useState } from "react"
import { db } from "../data/db"

    export const useCart = () => {

        const[data] = useState(db)

        

        return{
            data
        }
    }