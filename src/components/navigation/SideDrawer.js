import React from 'react';
import styled from 'styled-components';
import NavigationList from './NavigationList';
import Logo from '../Logo';
import Backdrop from '../UI/Backdrop';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 280px;
    max-width: 70%;
    box-shadow: rgba(0, 0, 0, 0.5);
    padding: 32px 16px;
    height: 100%;
    z-index: 200;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${(props) => props.open || 'translateX(-100%)'};

    @media (min-width: 700px) {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    height: 11%;
    margin-bottom: 32px;
`;

const Nav = styled.nav`
    height: 100%;
`;

export default function SideDrawer(props) {
    return (
        <>
            <Backdrop show={props.open} closed={props.clicked} />
            <Container open={props.open && 'translateX(0)'}>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <Nav>
                    <NavigationList />
                </Nav>
            </Container>
        </>
    );
}
