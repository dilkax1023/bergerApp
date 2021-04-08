import React from 'react';
import Button from '../../UI/Button';

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
        return (
            <li key={ingredient}>
                <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>: {props.ingredients[ingredient]}
            </li>
        );
    });

    return (
        <div>
            <h3>YOUR ORDER</h3>
            <p>Your delecious hambergur with following ingredients</p>
            <ul>{ingredientSummary}</ul>
            <h4>Total price: {props.price.toFixed(2)}$</h4>
            <p>Continue to checkout? </p>
            <Button clicked={props.onClickContinue} color='Success'>
                Continue
            </Button>
            <Button clicked={props.onClickCancel} color='Danger'>
                Cancel
            </Button>
        </div>
    );
}
