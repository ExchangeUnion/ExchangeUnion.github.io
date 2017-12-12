import * as React from 'react';
import Lottie from 'react-lottie';
import * as Utils from '../utils/utils';
import * as HttpHelp from '../utils/http-help';
import SuccessIcon from '../resources/icon/success';
import Config from '../utils/config';

const style = require('../scss/subscribe.scss');
const loadingAnimationData = require('../resources/animation-data/loading.json');

export interface SubscribeState {
    email: string;
    error: boolean;
    subscribeSuccess: boolean;
    loading: boolean;
}

const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData
};

export default class Subscribe extends React.Component<any, SubscribeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            error: false,
            subscribeSuccess: false,
            loading: false
        };
        this.onEmailChangeHandle = this.onEmailChangeHandle.bind(this);
        this.onSubscribeHandle = this.onSubscribeHandle.bind(this);
    }

    onEmailChangeHandle(event) {
        this.setState({
            email: event.target.value,
            error: false,
            subscribeSuccess: false
        });
    }

    onSubscribeHandle() {
        const emailError = !Utils.Utils.checkEmail(this.state.email);
        this.setState({
            error: emailError
        });

        if (!emailError) {
            this.setState({
                loading: true
            });

            const url = `${Config.API_PATH_SUBSCRIBE}?lang=${this.props.lang}&key=${Config.API_KEY}`;
            HttpHelp.HttpHelp.Post(url, {
                EmailAddress: this.state.email,
                Category: Config.APP_CATEGORY
            }).then((res: any) => {
                this.setState({
                    loading: false,
                    subscribeSuccess: true
                });
            });
        }
    }

    render() {
        const { i18n } = this.props;

        return (
            <div className={style.subscribe}>

                <div className={style['input-group']}>
                    <input
                        type="text"
                        placeholder={i18n.NEWS_LETTER_PREFILLED_FOOTER_TEXT}
                        maxLength={50}
                        onChange={this.onEmailChangeHandle}
                    />
                    <button onClick={this.onSubscribeHandle} disabled={this.state.loading || this.state.subscribeSuccess}>

                        {
                            this.state.loading
                            ? <Lottie
                                options={loadingOptions}
                                height={60}
                                width={60}
                            />
                                : this.state.subscribeSuccess
                                    ? <SuccessIcon />
                                    : i18n.NEWS_LETTER_SUBSCRIBE_FOOTER_TEXT
                        }
                    </button>
                </div>
                {
                    this.state.error ?
                        <p className={style.error}>
                            {i18n.COMMON_SUBSCRIBE_ERROR_INFO}
                        </p> :
                        null
                }
                {
                    this.state.subscribeSuccess ?
                        <p className={style.success}>
                            {i18n.COMMON_SUBSCRIBE_SUCCESS_INFO}
                        </p> :
                        null
                }
            </div>
        );
    }
}