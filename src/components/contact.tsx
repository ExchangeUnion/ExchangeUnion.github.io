import * as React from 'react';
import Lottie from 'react-lottie';
import * as HttpHelp from '../utils/http-help';

import LinkedinIcon from '../resources/icon/linkedin';
import TelegramIcon from '../resources/icon/telegram';
import AngelistIcon from '../resources/icon/angelist';
import SlackIcon from '../resources/icon/slack';
import TwitterIcon from '../resources/icon/twitter';
import FaceBookIcon from '../resources/icon/facebook';
import * as Utils from '../utils/utils';
import Config from '../utils/config';

const style = require('../scss/contact.scss');
const data = require('../services/data.json');
const successImg = require('../resources/img/success.png');
const contactImg = require('../resources/img/contact-icon.png');
const loadingAnimationData = require('../resources/animation-data/loading.json');

export interface ContactState {
    name: string;
    email: string;
    emailError: boolean;
    message: string;
    success: boolean;
    checkError: boolean;
    loading: boolean;
}

const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData
};

export default class Contact extends React.Component<any, ContactState> {
    constructor(props: {}) {
        super(props);

        this.state = {
          name: '',
          email: '',
          emailError: false,
          message: '',
          success: false,
          checkError: false,
            loading: false
        };

        this.onEmailChangeHandle = this.onEmailChangeHandle.bind(this);
        this.onNameChangeHandle = this.onNameChangeHandle.bind(this);
        this.onMessageChangeHandle = this.onMessageChangeHandle.bind(this);
        this.onSendHandle = this.onSendHandle.bind(this);
    }

    onNameChangeHandle(event) {
        this.setState({
            name: event.target.value
        });
    }

    onEmailChangeHandle(event) {
        this.setState({
            email: event.target.value,
            emailError: false
        });
    }

    onMessageChangeHandle(event) {
        this.setState( {
            message: event.target.value
        });
    }

    onSendHandle() {
        const emailError = Utils.Utils.checkEmail(this.state.email);
        if (!emailError) {
            this.setState({
                emailError: true
            });
            return;
        }

        if (this.state.name.length <= 0 || this.state.message.length <= 0) {
            this.setState({
                checkError: true
            });
            return;
        }

        if (emailError) {
            this.setState({
                loading: true
            });
            const url = `${Config.API_PATH_CONTACT}?lang=${this.props.lang}&key=${Config.API_KEY}`;
            HttpHelp.HttpHelp.Post(url, Object.assign({}, this.state, {Category: Config.APP_CATEGORY}))
                .then((res: any) => {
                this.setState({
                    loading: false,
                    success: true
                });
            });
        }
    }

    render () {
        const { i18n } = this.props;

        return (
            <div className={style.contact}>
                {
                    this.state.success
                        ? <div className={style.success}>
                            <img src={successImg} />
                            <p>{i18n.CONTACT_PAGE_YOUR_SUCCESS}</p>
                        </div>
                        : (<div>
                            <h1>{i18n.CONTACT_PAGE_TITLE}</h1>
                            <div>
                                <p>{i18n.CONTACT_PAGE_SUB_TITLE1A}
                                    <a className={style['title-icon']} href="https://angel.co/exchange-union/jobs"  target="_blank">
                                        <img src={contactImg} />
                                    </a>
                                    {i18n.CONTACT_PAGE_SUB_TITLE1B}
                                </p>
                                <div className={style.icon}>
                                    <a href={data.linkedin_link} target="_blank"><LinkedinIcon /></a>
                                    <a href={data.telegram_link} target="_blank"><TelegramIcon /></a>
                                    <a href={data.slack_link}  target="_blank"><SlackIcon /></a>
                                    <a href={data.angelist_link}  target="_blank"><AngelistIcon /></a>
                                    <a href={data.twitter_link} target="_blank"><TwitterIcon /></a>
                                    <a href={data.facebook_link} target="_blank"><FaceBookIcon /></a>
                                </div>
                                <p>{i18n.CONTACT_PAGE_SUB_TITLE2}</p>
                            </div>
                            <div className={style.form}>
                                <div className={style.line}>
                                    <div className={style['input-group']}>
                                        <label>{i18n.CONTACT_PAGE_YOUR_NAME}</label>
                                        <input maxLength={50} type="text" onChange={this.onNameChangeHandle} />
                                    </div>
                                    <div className={style['input-group']}>
                                        <label>{i18n.CONTACT_PAGE_YOUR_EMAIL}</label>
                                        <input maxLength={50}  type="text" onChange={this.onEmailChangeHandle} />
                                        {
                                            this.state.emailError
                                                ? <p>{i18n.COMMON_SUBSCRIBE_ERROR_INFO}</p>
                                                : null
                                        }
                                    </div>
                                </div>
                                <div className={style['input-group']}>
                                    <label>{i18n.CONTACT_PAGE_YOUR_MESSAGE}</label>
                                    <textarea maxLength={5000}  onChange={this.onMessageChangeHandle} />
                                </div>
                            </div>
                            <button onClick={this.onSendHandle} disabled={this.state.loading || this.state.success}>
                                {
                                    this.state.loading
                                    ? <Lottie options={loadingOptions} height={60} width={60} />
                                    : i18n.COMMON_SEND_BUTTON_TEXT
                                }
                                </button>
                            {
                                this.state.checkError
                                    ? <p className={style.error}>{i18n.COMMON_SEND_ERROR}</p>
                                    : null

                            }
                        </div>)
                }
            </div>
        );
    }
}