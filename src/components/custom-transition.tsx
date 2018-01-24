import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CustomTransition extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                className="react-container"
                transitionName="slide-in"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1500}
            >
                {this.props.children}
            </ReactCSSTransitionGroup>
        );
    }
}