import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
export default function CardProduct({ product }) {
    const [cart, setCart] = useState([]);

    function handleCartAdd() {
        setCart([...cart, product]);
    }

    return (
        <div
            className="w-full card bg-base-100 shadow-xl"
            onClick={handleCartAdd}
        >
            <figure>
                <img
                    src={product.image}
                    className="h-64 w-full object-cover"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body p-5 px-0">
                <h2 className="truncate text-md">{product.title}</h2>
                <span>{product.price}</span>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                        <FaStar className="text-xs text-yellow-500" />
                        <span>{product.rating.rate}</span>
                    </span>
                    {/* <FaCircle className="text-[0.3em]" /> */}
                    <span className="flex items-center gap-1">
                        ({product.rating.count})
                    </span>
                </div>
            </div>
        </div>
    );
}
