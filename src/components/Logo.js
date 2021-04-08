import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../assets/images/burger-logo.png';

const Container = styled.div`
    background-color: white;
    padding: 8px;
    height: 80%;
    box-sizing: border-box;
    border-radius: 5px;

    & img {
        height: 100%;
    }
`;

export default function Logo() {
    return (
        <Container>
            <img src={burgerLogo} alt='burger logo' />
        </Container>
    );
}
