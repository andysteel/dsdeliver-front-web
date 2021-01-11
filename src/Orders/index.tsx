import React, { useEffect, useState } from 'react';
import { fetchProducts, saveOrder } from '../api';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';
import { toast } from 'react-toastify';

const Orders = () => {

    const [products, setProducts] = useState<Array<Product>>([]);
    const [selectedProducts, setSelectedProducts] = useState<Array<Product>>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, product) => {
        return sum + product.price
    }, 0);
    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        saveOrder(payload).then((response) => {
            toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
            setSelectedProducts([]);
        })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductList 
                products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
                />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
            <OrderSummary amount={selectedProducts.length} 
                        totalPrice={totalPrice} 
                        send={handleSubmit} />
        </div>
    )
}

export default Orders;