import * as React from 'react';
import { Link } from 'react-router-dom';
import * as HttpHelp from '../utils/http-help';
import Config from '../utils/config';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
import TeamItem from '../components/team-item';
import PageTitle from '../components/page-title';
import Loading from '../components/loading';

const style = require('../scss/team.scss');
const dfgImg = require('../resources/img/dfg-logo.png');
const okexImg = require('../resources/img/okex.png');
const ripioImg = require('../resources/img/ripioCredit.png');

export interface TeamItemObject {
    name: string;
    description: string;
    position: string;
    picture: string;
}

export default class Team extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            teamList: []
        };
    }

    componentDidMount() {
        this.props.setPageview('/team');
        const url = `${Config.API_PATH_TEAM}?lang=${this.props.lang}&key=${Config.API_KEY}`;
        HttpHelp.HttpHelp.Get(url).then((res: object) => {
            this.setState({
                teamList: res,
                loading: false
            });
        });
    }

    render () {
        const { i18n, lang } = this.props;
        const { loading, teamList } = this.state;
        return (
            <div className={style.team}>
                <div className={style.header}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><p className={style.title}>{i18n.TEAM_PAGE_TITLE}</p></CustomTransition></ScrollInit>
                    </div>
                </div>
                <div className={style['core-team']}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.TEAM_PAGE_CORE_TEAM} /></CustomTransition></ScrollInit>
                        <div className={style.team}>
                            {
                                teamList.map( (item: any) => {
                                    if (item.type === 'CoreTeam') {
                                        const dataItem: TeamItemObject = {
                                            name: lang === 'zh-CN' ? item.zhName : item.enName,
                                            description: lang === 'zh-CN' ? item.zhDescription : item.enDescription,
                                            position: lang === 'zh-CN' ? item.zhPosition : item.enPosition,
                                            picture: item.photo
                                        };
                                        return (
                                            <TeamItem key={Math.random()} data={dataItem} type="coreTeam" />
                                        );
                                    }
                                    return null;
                                })
                            }
                            {loading ? <Loading text={i18n.NEWS_PAGE_LOADING} /> : null}
                        </div>
                    </div>
                </div>
                <div className={style['our-partners']}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.TEAM_PAGE_OUR_PARTNERS} /></CustomTransition></ScrollInit>
                        <div className={style.images}>
                            <Link to="http://www.digitalfinancegroup.net" target={'_blank'}><img src={dfgImg} /></Link>
                            <Link to="https://www.okex.com/" target={'_blank'}><img src={okexImg} /></Link>
                            <Link to="https://ripiocredit.network/" target={'_blank'}><img src={ripioImg} /></Link>
                        </div>
                    </div>
                </div>
                <div className={style.advisors}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.TEAM_PAGE_ADVISORS} /></CustomTransition></ScrollInit>
                        <div className={style.team}>
                            {
                                teamList.map( (item: any) => {
                                    if (item.type === 'Advisors') {
                                        const dataItem: TeamItemObject = {
                                            name: lang === 'zh-CN' ? item.zhName : item.enName,
                                            description: lang === 'zh-CN' ? item.zhDescription : item.enDescription,
                                            position: lang === 'zh-CN' ? item.zhPosition : item.enPosition,
                                            picture: item.photo
                                        };
                                        return (
                                            <TeamItem key={Math.random()} data={dataItem} type="Advisors" />
                                        );
                                    }
                                    return null;
                                })
                            }
                            {loading ? <Loading text={i18n.NEWS_PAGE_LOADING} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}