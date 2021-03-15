import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    margin-top: 32px;
`;

export default function Layout(props) {
    return (
        <>
            <header>Toolbar, LOGO, NAV</header>
            <Main>{props.children}</Main>
        </>
    );
}
