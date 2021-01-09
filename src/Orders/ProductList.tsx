import React from 'react';
import ProductCard from './ProductCard';
import { Product } from './types';

export type ProductListProps = {
    products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
            </div>
        </div>
    )
}

export default ProductList;