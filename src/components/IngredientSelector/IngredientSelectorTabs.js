import React from 'react';
import styled, { keyframes } from 'styled-components';
import IngredientSelectorTab from './IngredientSelectorTab/IngredientSelectorTab';

const Container = styled.div`
    width: 100%;
    background-color: #cf8f2e;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: 20px auto;
    padding: 50px 0;
`;

// Create the keyframes
const enable = keyframes`
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const OrderButton = styled.button`
    background-color: #dad735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;
    margin-top: 20px;

    &:hover,
    &:active {
        background-color: #a0db41;
        border: 1px solid #966909;
        color: #966909;
    }

    &:disabled {
        background-color: #c7c6c6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }

    &:not(:disabled) {
        animation: ${enable} 0.3s linear;
    }
`;

export default function IngredientSelectorTabs(props) {
    const selections = [
        { label: 'Salad', type: 'salad' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Bacon', type: 'bacon' },
    ];

    return (
        <Container>
            <p>
                Current price: <strong>{props.price.toFixed(2)}$</strong>
            </p>
            {selections.map((selection) => {
                return (
                    <IngredientSelectorTab
                        key={selection.label}
                        label={selection.label}
                        add={() => props.add(selection.type)}
                        remove={() => props.remove(selection.type)}
                        disabled={props.disabledInfo[selection.type]}
                    />
                );
            })}
            <OrderButton disabled={!props.parchasable} onClick={props.ordered}>
                ORDER NOW
            </OrderButton>
        </Container>
    );
}
