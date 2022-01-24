import React from 'react';
import { InputBoxError, InputBoxStyle } from './inputbox.style';

function InputBox({ children, errors=false, errorMessage='', ...rest }) {
    return (
        <>
            <InputBoxStyle {...rest}>
                {children}
            </InputBoxStyle>
            <InputBoxError
                theme={{display: errors}}
            >
                {errorMessage}
            </InputBoxError>
        </>
    );
}

export default InputBox;