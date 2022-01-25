import React from 'react';
import { InputBoxStyle, InputBoxError } from './inputbox.style';

function InputBox({ children, errorMessage = '', errors = false, ...rest }) {
    return (
        <>
            <InputBoxStyle {...rest}>
                {children}
            </InputBoxStyle>
            <InputBoxError
                theme={{ display: errors }}
            >
                {errorMessage}
            </InputBoxError>
        </>
    );
}

export default InputBox;