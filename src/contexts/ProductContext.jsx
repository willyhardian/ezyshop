import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext([]);

export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <ProductContext.Provider
            value={{ products, setProducts, loading, error, fetchProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
}
