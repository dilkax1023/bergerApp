import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationList from './NavigationList';
import Hamberger from './Hamberger';

const Container = styled.div`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703b09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`;

const Nav = styled.nav`
    height: 100%;

    @media (max-width: 699px) {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    height: 80%;
`;

export default function Toolbar(props) {
    return (
        <Container>
            <Hamberger clicked={props.onClickToggler} />
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <Nav>
                <NavigationList />
            </Nav>
        </Container>
    );
}
