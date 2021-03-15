import React from 'react';
import styled from 'styled-components';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 500px) and (min-height: 400px) {
        width: 350px;
        height: 300px;
    }

    @media (min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px;
    }

    @media (min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }
`;

export default function Burger() {
    return (
        <Wrapper>
            <BurgerIngredients type='bread-top' />
            <BurgerIngredients type='cheese' />
            <BurgerIngredients type='salad' />
            <BurgerIngredients type='bacon' />
            <BurgerIngredients type='meat' />
            <BurgerIngredients type='bread-buttom' />
        </Wrapper>
    );
}
