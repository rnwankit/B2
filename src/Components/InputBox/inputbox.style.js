import styled from "styled-components";
import {Input, FormFeedback} from 'reactstrap'

export const InputBoxStyle = styled(Input)`

`
export const InputBoxError = styled(FormFeedback)`
    color: red;
    display: ${props => props.error ? 'block' : 'none'}
`;
