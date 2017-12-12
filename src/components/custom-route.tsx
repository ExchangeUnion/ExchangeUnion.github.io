import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Utils } from '../utils/utils';

export const UnauthenticatedRoute = ({component: C, props: cProps, ...rest}: any) => {
    const redirect = Utils.queryString('redirect');
    return (
        <Route
            {...rest}
            render={(props: any) => (
                cProps.userToken === null
                    ? <C {...props} {...cProps} />
                    : <Redirect to={(redirect === '' || redirect === null) ? '/' : redirect}/>
            )}
        />
    );
};

export const AuthenticatedRoute = ({component: C, props: cProps, ...rest}: any) => (
    <Route
        {...rest}
        render={(props: any) => (
            cProps.userToken !== null
                ? <C {...props} {...cProps} />
                : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`}/>
        )}
    />
);

export const AppliedRoute = ({component: C, props: cProps, ...rest}: any) => (
    <Route {...rest} render={(props: any) => <C {...props} {...cProps} />}/>
);