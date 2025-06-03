import React, { useCallback, useState } from "react";

export default function ProductList() {
    const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"]);

    const removeProduct = useCallback((item) => {
        setProducts(prev => prev.filter(p => p !== item));
    }, []);

    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product}>
                        {product}
                        <button onClick={() => removeProduct(product)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
