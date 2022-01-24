import React from 'react';
import { LinkButton, PrimaryButton } from './button.style';

export const ButtonType = {
    PRIMARY: "PRIMARY",
    LINK: "LINK" 
}

function Button({ buttonType="PRIMARY", children, ...rest}) {
    
    let ButtonComponent;

    switch(buttonType) {
        case ButtonType.PRIMARY:
            ButtonComponent = PrimaryButton;
            break;
        case ButtonType.LINK:
            ButtonComponent = LinkButton;
            break;      
    }

    return (
        <ButtonComponent {...rest}>
            {children}
        </ButtonComponent>
    );
}

export default Button;