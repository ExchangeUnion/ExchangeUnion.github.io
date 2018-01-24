import * as React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
export default class NotFound extends React.Component<any, any> {
    render () {
        return (
            <p style={{fontSize: '200px', color: '#1951A3', textAlign: 'center', paddingTop: '10%'}}>404</p>
        );
    }
}