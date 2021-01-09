import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

const Orders = () => {

    const [products, setProducts] = useState<Array<Product>>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary />
        </div>
    )
}

export default Orders;