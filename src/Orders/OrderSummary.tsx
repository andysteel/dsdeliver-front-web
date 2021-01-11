import React from 'react';
import { formatPrice } from './helpers';

type OrderSummaryProps = {
    amount: number;
    totalPrice: number;
    send: () => void;
}

const OrderSummary = ({amount, totalPrice, send}: OrderSummaryProps) => {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                    <strong className="amount-selected">{amount}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="order-summary-total">
                    <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
                        VALOR TOTAL
                    </span>
                </div>
                <button 
                    className="order-summary-make-order"
                    onClick={send}>
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    )
}

export default OrderSummary;