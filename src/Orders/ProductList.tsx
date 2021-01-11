import React from 'react';
import { checkIsSelected } from './helpers';
import ProductCard from './ProductCard';
import { Product } from './types';

export type ProductListProps = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void
}

const ProductList = ({products, onSelectProduct, selectedProducts}: ProductListProps) => {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
            {products.map(product => (
                <ProductCard key={product.id} 
                            product={product} 
                            onSelectProduct={onSelectProduct}
                            isSelected={checkIsSelected(selectedProducts, product)}/>
            ))}
            </div>
        </div>
    )
}

export default ProductList;