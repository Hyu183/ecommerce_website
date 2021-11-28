import React, { useState } from 'react';

const CartContext = React.createContext({
    items: [],
    addProduct: () => {},
    removeProduct: () => {},
    changeQuantity: () => {},
    totalProduct: () => {},
    totalPrice: () => {},
    checkout: () => {},
});

export const CartContextProvider = (props) => {
    const [items, setItems] = useState([]);

    //  const productSelected = {
    //      id: Date.now().toString() + (Math.random() * 1000000).toString(),
    //      productID: product.productInfor.id,
    //      productName: product.productInfor.name,
    //      thumbnailUrl: product.productInfor.thumbnail_url,
    //      price: product.productInfor.price,
    //      color,
    //      size,
    //      quantity,
    //  };

    const addProductHandler = (product) => {
        setItems((prevVal) => {
            prevVal.push(product);
            return prevVal;
        });
    };

    const removeProductHandler = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const changeQuantityHandler = (id, unit) => {
        const item = items.find((i) => i.id === id);
        const index = items.indexOf(item);
        if (item.quantity + unit <= 0) {
            removeProductHandler(id);
            return;
        } else {
            setItems((prevVal) => {
                prevVal[index] = { ...item, quantity: item.quantity + unit };

                return [...prevVal];
            });
        }
    };

    const calculateProdCount = () => {
        let count = items.reduce((cnt, item) => {
            return cnt + item.quantity;
        }, 0);

        return count;
    };

    const calculateTotalPrice = () => {
        let total = items.reduce((sum, item) => {
            return sum + item.quantity * item.price;
        }, 0);

        return total;
    };

    const checkoutHandler = () => {
        setItems([]);
    };

    const contextValue = {
        items: items,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
        changeQuantity: changeQuantityHandler,
        totalProduct: calculateProdCount,
        totalPrice: calculateTotalPrice,
        checkout: checkoutHandler,
    };
    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
