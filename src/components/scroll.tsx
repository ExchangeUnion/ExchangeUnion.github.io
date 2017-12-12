import * as React from 'react';

export default class Scroll extends React.Component<any, any> {
    DOMElement: {
        myRef?: any;
    } = {};

    constructor(props: any) {
        super(props);
        this.state = {
            init: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(this.handleScroll);
    }

    handleScroll () {
        let bodyScrollTop = window.scrollY;

        if (window.navigator.userAgent.indexOf('Trident/7.0') >= 0) {
            bodyScrollTop = document.documentElement.scrollTop;
        }

        const ele = this.DOMElement.myRef;
        if (!this.DOMElement.myRef) {
            return;
        }
        if (window.innerHeight + bodyScrollTop > ele.offsetTop) {
            this.setState({
                init: true
            });
        }
    }

    render() {
        return (
            <span ref={( dom: any ) => { this.DOMElement.myRef = dom; }}>
                {
                    this.state.init
                    ? this.props.children
                    : null
                }
            </span>
        );
    }
}