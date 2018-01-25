import * as React from 'react';
import * as HttpHelp from '../utils/http-help';
import CloseIcon from '../resources/icon/close';
import Config from '../utils/config';

const style = require('../scss/subscribe-success.scss');
const successImg = require('../resources/img/success.png');

export default class SubscribeSuccess extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        document.body.classList.add('subscribe-success');
        const url = `${Config.API_PATH_SUBSCRIBE_SUCCESS}?lang=${this.props.lang}&key=${Config.API_KEY}`;
        HttpHelp.HttpHelp.Post(url, {
            email: this.props.match.params.base,
            Category: Config.APP_CATEGORY
        }).then((res: any) => {
            console.log(res);
        });
    }

    onClose() {
        document.body.classList.remove('subscribe-success');
        this.props.history.push('/');
    }

    render () {
        const { i18n } = this.props;
        return (
            <div className={style.success}>
                <div className={style.content}>
                    <img src={successImg} />
                    <p>{i18n.NEWS_PAGE_SUBSCRIBE_SUCCESS}</p>
                    <a className={style.close} onClick={this.onClose}><CloseIcon color="#fff" /></a>
                </div>
            </div>
        );
    }
}
