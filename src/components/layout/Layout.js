import React from 'react';
import styled from 'styled-components';
import Toolbar from '../navigation/Toolbar';
import SideDrawer from '../navigation/SideDrawer';

const Main = styled.main`
    margin-top: 72px;
`;

export default class Layout extends React.Component {
    state = {
        visible: true,
    };

    onClickClose = () => {
        this.setState({ visible: false });
    };

    onClickToggler = () => {
        this.setState((prevState) => {
            return { visible: !prevState.visible };
        });
    };

    render() {
        return (
            <>
                <Toolbar onClickToggler={this.onClickToggler} />
                <SideDrawer clicked={this.onClickClose} open={this.state.visible} />
                <Main>{this.props.children}</Main>
            </>
        );
    }
}
