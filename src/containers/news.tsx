import * as React from 'react';
import { Link } from 'react-router-dom';
import Config from '../utils/config';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
import * as Utils from '../utils/utils';
import * as HttpHelp from '../utils/http-help';
import Subscribe from '../components/subscribe';
import BlogItem from '../components/blog-item';
import Loading from '../components/loading';

export interface Blog {
    date: string;
    title: string;
    link: string;
    language: string;
    imageUrl: string;
    source: string;
}

export interface BlogProps {
    link: string;
    title: string;
    year: number;
    month: string;
    day: number;
    imageUrl: string;
    source: string;
}

const style = require('../scss/news.scss');

export default class News extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            newsData: []
        };
    }

    componentDidMount () {
        const url = `${Config.API_PATH_PRESS}?lang=${this.props.lang}&key=${Config.API_KEY}`;
        HttpHelp.HttpHelp.Get(url).then((res: any) => {
            this.setState({
                loading: false,
                newsData: res
            });
        });
    }

    onFormantDate(date) {
        const oDate = new Date(date);
        return {
            year: oDate.getFullYear(),
            month: Utils.Utils.formantMonth(oDate.getMonth()),
            day: oDate.getDate()
        };
    }

    render() {
        const { i18n, lang } = this.props;
        return (
            <div className={style.news}>
                <div className={style.header}>
                    <div className={style.content}>
                        <ScrollInit>
                            <CustomTransition>
                                <div className={style.title}>
                                    {i18n.NEWS_PAGE_TITLE}
                                    <div className={style.subscribe}>
                                        <h4>{i18n.NEWS_LETTER_FOOTER_TEXT}</h4>
                                        <Subscribe i18n={i18n} lang={lang}/>
                                    </div>
                                </div>
                            </CustomTransition>
                        </ScrollInit>
                    </div>
                </div>
                <div className={style.link}>
                    <div className={style.content}>
                        <Link to="/news" className={style.active}>{i18n.NEWS_PAGE_PRESS_TEXT}</Link>
                        <a href="http://blog.exchangeunion.com">{i18n.NEWS_PAGE_BLOG_TEXT}</a>
                    </div>
                </div>
                <div className={style.blog}>
                    <div className={style.content}>
                        <div className={style['blog-content']}>
                            {
                                this.state.newsData.map((item: Blog) => {
                                    const oDate = this.onFormantDate(item.date);
                                    const blogItem: BlogProps = {
                                        link: item.link,
                                        title: item.title,
                                        year: oDate.year,
                                        month: oDate.month,
                                        day: oDate.day,
                                        imageUrl: item.imageUrl,
                                        source: item.source
                                    };
                                    return (
                                        <BlogItem key={Math.random()} data={blogItem}/>
                                    );
                                })
                            }
                            {
                                this.state.loading
                                    ? <Loading text={i18n.NEWS_PAGE_LOADING} />
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}