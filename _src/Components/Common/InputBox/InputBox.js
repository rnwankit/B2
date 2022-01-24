import React from 'react';
import { InputBoxStyle } from './inputbox.style';

function InputBox({ children, ...rest }) {
    return ( 
        <InputBoxStyle {...rest}>
            {children}
        </InputBoxStyle>
    );
}

export default InputBox;