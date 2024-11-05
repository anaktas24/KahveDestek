
import {createContext, useState} from 'react';
import { products } from '../assets/assets/assets'

export const ShopContext = createContext()


const ShopContextProvider =(props) =>{

    const currency = '$'
    const delivery_fee = 10
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems] =useState({})


    const addToCart = async (itemId)=>{

      {/*  if (!something) {
            toast.error('Select Product Size')
            return  
        }*/}

        let cartData= structuredClone(cartItems)

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
    
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId];
            }
        }
    
        return totalCount;
    };

    const value ={ products, currency, delivery_fee, search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount}


    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider  