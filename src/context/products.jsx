import { createContext, useState, useEffect } from 'react';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // Chỉ dùng 1 lần đề update sản phẩm lên firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('collections', SHOP_DATA);
    // }, []);

    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};