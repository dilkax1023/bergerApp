import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;

    @media (min-width: 700px) {
        flex-flow: row;
    }

    li {
        margin: 10px 0;
        box-sizing: border-box;
        display: block;
        width: 100%;

        a {
            color: #8f5c2c;
            text-decoration: none;
            width: 100%;
            box-sizing: border-box;
            display: block;

            &:hover,
            &:active,
            &.active {
                color: #40a4c8;
            }
        }

        @media (min-width: 700px) {
            margin: 0;
            display: flex;
            height: 100%;
            width: auto;
            align-items: center;

            a {
                color: white;
                height: 100%;
                padding: 16px 10px;
                border-bottom: 4px solid transparent;

                &:hover,
                &:active,
                &.active {
                    background-color: #8f5c2c;
                    border-bottom: 4px solid #40a4c8;
                    color: white;
                }
            }
        }
    }
`;

export default function NavigationList() {
    return (
        <UL>
            <li>
                <a href='/' alt='Burger Builder' className='active'>
                    Burger Builder
                </a>
            </li>
            <li>
                <a href='/' alt='checkout link'>
                    Checkout
                </a>
            </li>
        </UL>
    );
}
