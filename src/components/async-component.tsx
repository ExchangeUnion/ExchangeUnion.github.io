import * as React from 'react';

export default function asyncComponent(importComponent: any) {

    class AsyncComponent extends React.Component<{}, { component: any }> {
        constructor(props: {}) {
            super(props);
            this.state = {
                component: null,
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component: component
            });
        }

        render() {
            const C = this.state.component;
            return C
                ? <C {...this.props} />
                : null;
        }

    }

    return AsyncComponent;
}