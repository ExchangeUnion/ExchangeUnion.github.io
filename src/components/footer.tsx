import * as React from 'react';
import { Link } from 'react-router-dom';
import * as HttpHelp from '../utils/http-help';
import Subscribe from '../components/subscribe';

import LinkedinIcon from '../resources/icon/linkedin';
import TelegramIcon from '../resources/icon/telegram';
import SlackIcon from '../resources/icon/slack';
import AngelistIcon from '../resources/icon/angelist';
import TwitterIcon from '../resources/icon/twitter';
import FaceBookIcon from '../resources/icon/facebook';
import LoveIcon from '../resources/icon/love';

export interface ResourcesItem {
    titleTranslateKey: string;
    link: string;
    target: string;
}

const style = require('../scss/footer.scss');
const data = require('../services/data.json');

export default class Footer extends React.Component <any, any> {
    constructor (props: {}) {
        super(props);
        this.state = {
            lastBlogPost: {},
            lastPressPost: {},
            blogLoading: true,
            pressLoading: true,
            currentLanguage : window.navigator.language
        };
        this.onChangeLanguageHandle = this.onChangeLanguageHandle.bind(this);
    }

    componentDidMount () {
        const blogUrl = `/blog?lang=${this.props.lang}&key=SExx334hhZXhjaGFuZ2UtdW5pb24tc2VuZC1lbWFpbC1rZXktYWJjZA==`;
        const pressUrl = `/press/xuc?lang=${this.props.lang}&key=SExx334hhZXhjaGFuZ2UtdW5pb24tc2VuZC1lbWFpbC1rZXktYWJjZA==`;
        HttpHelp.HttpHelp.Get(blogUrl).then((res: any) => {
            this.setState({
                blogLoading: false,
                lastBlogPost: res
            });
        });

        HttpHelp.HttpHelp.Get(pressUrl).then((res: any) => {
            this.setState({
                pressLoading: false,
                lastPressPost: res[0]
            });
        });
    }

    onChangeLanguageHandle (lang) {
        if (typeof this.props.changeLanguage === 'function') {
            this.props.changeLanguage.call(this, lang);
            this.setState({
                currentLanguage: lang
            });
        }
    }

    render () {
        const { i18n } = this.props;
        return (
            <footer className={style.footer}>
                <div className={style.content}>
                    <div className={`${style.column} ${style['icon-list']}`}>
                        <div className={style.icon}>
                            <a href={data.linkedin_link} target="_blank"><LinkedinIcon /></a>
                            <a href={data.telegram_link} target="_blank"><TelegramIcon /></a>
                            <a href={data.slack_link} target="_blank"><SlackIcon /></a>
                            <a href={data.angelist_link} target="_blank"><AngelistIcon /></a>
                            <a href={data.twitter_link} target="_blank"><TwitterIcon /></a>
                            <a href={data.facebook_link} target="_blank"><FaceBookIcon /></a>
                        </div>
                        <ul className={style.link1}>
                            <li><Link to="/terms">{i18n.TERMS_FOOTER_LINK_TEXT}</Link></li>
                            <li><Link to="/privacy">{i18n.PRIVACY_FOOTER_LINK_TEXT}</Link></li>
                        </ul>
                        <div className={style.language}>
                            <button className={this.props.lang === 'en-US' ? style.active : ''} onClick={() => { this.onChangeLanguageHandle('en-US'); }}>{i18n.ENGLISH_FOOTER_TITLE}</button>
                            <button className={this.props.lang === 'zh-CN' ? style.active : ''} onClick={() => { this.onChangeLanguageHandle('zh-CN'); }}>{i18n.CHINESE_FOOTER_TITLE}</button>
                        </div>
                    </div>
                    <div className={`${style.column} ${style['blog-list']}`}>
                        <div key={Math.random()}>
                            <h4>{i18n.LATEST_BLOG_POST_FOOTER_TITLE}</h4>
                            <p>
                                {
                                    this.state.blogLoading
                                        ? <span>{i18n.NEWS_PAGE_LOADING}</span>
                                        : <a href={this.state.lastBlogPost.link} target={'_blank'}>{this.state.lastBlogPost.title}</a>
                                }
                            </p>
                        </div>
                        <div key={Math.random()}>
                            <h4>{i18n.LATEST_PRESS_ARTICLE_FOOTER_TITLE}</h4>
                            <p>
                                {
                                    this.state.pressLoading
                                    ? <span>{i18n.NEWS_PAGE_LOADING}</span>
                                    : <a href={this.state.lastPressPost.link} target={'_blank'}>{this.state.lastPressPost.title}</a>
                                }
                            </p>
                        </div>
                    </div>
                    <div className={`${style.column} ${style['link-list']}`}>
                        <h4>{i18n.RESOURCES_FOOTER_TITLE}</h4>
                        <ul>
                            {
                                data.footer_resources.map((item: ResourcesItem) => {
                                    return(
                                        <li key={Math.random()}><Link to={item.link} target={item.target}>{i18n[item.titleTranslateKey]}</Link></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className={`${style.column} ${style.subscribe}`}>
                        <h4>{i18n.NEWS_LETTER_FOOTER_TEXT}</h4>
                        <Subscribe i18n={i18n} lang={this.state.currentLanguage} />
                    </div>
                </div>
                <div  className={`${style.content} ${style.copyright}`}>
                    <p>{i18n.COPYRIGHT_FOOTER_TEXT}</p>
                    <p className={style.love}>
                        {i18n.CREATORS_FOOTER_TEXT1}
                        <LoveIcon />
                        {i18n.CREATORS_FOOTER_TEXT2}
                    </p>
                </div>
            </footer>
        );
    }
}