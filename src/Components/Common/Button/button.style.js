import styled from "styled-components";
import {Button} from 'reactstrap'

const BaseButton = styled(Button)`
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
`;

export const PrimaryButton = styled(BaseButton)`
    margin: 4px;
    background: ${props => props.color ? props.color : '#FF6337'};
    color: ${props => props.border ? '#000' : '#fff'} ;
    border-radius: 50px;
    padding: 8px 25px;
    border: ${props => props.border ? '1px solid #000' : '0'} ;

    :hover {
        background-color: #0d6efd
    }
`;



export const LinkButton = styled(BaseButton)`
    background: none;
    color: #000;
    padding: 0;
    border: 0;
    text-decoration: underline;
    color: #FF6337;
    text-align: center !important;

    :hover {
        background: none;
        color: #000;
    }
`;