import React from 'react';
import styled from 'styled-components';

const ElButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;

    &.Success {
        color: #5c9210;
    }

    &.Danger {
        color: #944317;
    }

    &:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }
`;

export default function Button(props) {
    return (
        <ElButton className={props.color} onClick={props.clicked}>
            {props.children}
        </ElButton>
    );
}
