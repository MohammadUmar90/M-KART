import product from '../m-kartschema/schemas/product';
import React, { createContext, useReducer,useContext,useEffect,useState } from 'react';
import toast from 'react-hot-toast';

const Context = createContext();





export const StateContext = ({ children }) => {
    const [ShowCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totelPrice, setTotelPrice] = useState(0);
    const [totelQuantity, setTotelQuantity] = useState(0);
    const [qty, setQty] = useState(1);

    let fondProduct;
    let index;

    const onAdd = (product, qty) => {
        const exist = cartItems.find((item) => item._id === product._id); 
        setTotelPrice((prevPrice) => prevPrice + product.price * qty);
        setTotelQuantity((prevQuantity) => prevQuantity + qty);
        if(exist){
            const newCartItems = cartItems.map((item) => {
                if(item._id === product._id){
                    return {...exist, qty: exist.qty + qty};
                }
            });

            setCartItems(newCartItems);
            
        }
        else{
            product.qty=qty;
            setCartItems([...cartItems,{...product}]);
        }
        toast.success(`${qty} ${product.name} added to cart`);
    };
    
    const removeItem = (product) => {
        fondProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        setTotelPrice((prevPrice) => prevPrice - fondProduct.price * fondProduct.qty);
        setTotelQuantity((prevQuantity) => prevQuantity - fondProduct.qty);
        setCartItems(newCartItems);
    }



    const toggleCartItems = (id,value) => {
        fondProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);    
        if(value === 'inc'){
            setCartItems([...newCartItems,{...fondProduct,qty:fondProduct.qty+1}]);
            setTotelPrice((prevPrice) => prevPrice + fondProduct.price);
            setTotelQuantity((prevQuantity) => prevQuantity + 1);
        }else if(value === 'dec'){
            if(fondProduct.qty>1){
               
                setCartItems([...newCartItems,{...fondProduct,qty:fondProduct.qty-1}]);
                setTotelPrice((prevPrice) => prevPrice - fondProduct.price);
                setTotelQuantity((prevQuantity) => prevQuantity - 1);
            }
        }
    };

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty -1 < 1) {
                return 1;
            }
            return prevQty - 1;
        });
    }


    return(
        <Context.Provider value={{ShowCart,cartItems,totelPrice,totelQuantity,qty,incQty,decQty,onAdd,setShowCart,toggleCartItems,removeItem,setCartItems,setTotelPrice,setTotelQuantity}}>
            {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);