import React from 'react';
import { FormFeedback } from 'reactstrap';
import { InputBoxError, InputBoxStyle } from '../InputBox/inputbox.style';

function InputBox({children, errorMessage='', errors=false, ...rest}) {
    console.log(errors);
    return (
        <>
            <InputBoxStyle {...rest}>
                {children}
            </InputBoxStyle>
            <InputBoxError
                error={errors}
            >
                {errorMessage}
            </InputBoxError>
        </>
    );
}

export default InputBox;