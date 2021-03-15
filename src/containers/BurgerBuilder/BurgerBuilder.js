import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 2,
            meat: 1,
        },
    };

    render() {
        return (
            <>
                <Burger />
                <div>INGREDIENT CONTROLLER</div>
            </>
        );
    }
}
