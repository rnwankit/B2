import React from 'react';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { isLogin } from '../utils';

function PublicRoute({component: Component, restricted=false, ...rest}) {
    console.log(Component, restricted, isLogin(), "llllll");
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/" />
            :
                <Component {...props} />
        )}
        />
    );
}

export default PublicRoute;