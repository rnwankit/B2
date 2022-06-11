import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

function PrivateRoute({component: Component, ...rest}) {
    console.log(isLogin(), "ppppppp");
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            :
                <Redirect to="/login" />
        )}

        />
    );
}

export default PrivateRoute;