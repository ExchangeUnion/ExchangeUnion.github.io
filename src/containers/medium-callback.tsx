import * as React from 'react';

const style = require('../scss/download.scss');

export default class MediumCallback extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        //
    }

    render () {
        return (
            <div className={style.success}>
                <div className={style.content}>
                    <p>Medium</p>
                </div>
            </div>
        );
    }
}
