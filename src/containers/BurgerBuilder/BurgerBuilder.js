import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientSelectorTabs from '../../components/IngredientSelector/IngredientSelectorTabs';
import { changeIngredients } from '../../utils/helpers';
import Model from '../../components/UI/Model';
import OrderSummary from '../../components/IngredientSelector/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 1.5,
    cheese: 1,
    bacon: 2,
    meat: 2,
};

export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        parchasable: false,
        purchaing: false,
    };

    addIngredient = (type) => {
        const updatedIngredients = changeIngredients(type, this.state.ingredients, 1);
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENTS_PRICE[type];
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
        this.setParchasable(updatedIngredients);
    };

    removeIngredient = (type) => {
        const updatedIngredients = changeIngredients(type, this.state.ingredients, -1);
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENTS_PRICE[type];
        if (updatedIngredients[type] < 0) {
            return;
        }
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
        this.setParchasable(updatedIngredients);
    };

    setParchasable = (ingredients) => {
        const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);

        this.setState({ parchasable: sum > 0 });
    };

    makeOrder = () => {
        this.setState({ purchaing: true });
    };

    cancelOrder = () => {
        this.setState({ purchaing: false });
    };

    onClickContinue = () => {
        alert('you coninue!');
    };

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <>
                <Model show={this.state.purchaing} modelClosed={this.cancelOrder}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        onClickCancel={this.cancelOrder}
                        onClickContinue={this.onClickContinue}
                        price={this.state.totalPrice}
                    />
                </Model>
                <Burger ingredients={this.state.ingredients} />
                <IngredientSelectorTabs
                    add={this.addIngredient}
                    remove={this.removeIngredient}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    parchasable={this.state.parchasable}
                    ordered={this.makeOrder}
                />
            </>
        );
    }
}
