import React, { useContext, useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { ProductContext } from "../contexts/ProductContext";

export default function Home() {
    const { products, loading, error } = useContext(ProductContext);
    return (
        <>
            {error && error.message}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {loading
                        ? "Loading..."
                        : products?.map((product) => {
                              return (
                                  <CardProduct
                                      key={product.id}
                                      product={product}
                                  />
                              );
                          })}
                </div>
            </div>
        </>
    );
}
