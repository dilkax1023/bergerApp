import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`;

export default function Backdrop(props) {
    return props.show ? <Container onClick={props.closed}></Container> : null;
}
