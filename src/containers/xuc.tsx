import * as React from 'react';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
import PageTitle from '../components/page-title';
import * as HttpHelp from '../utils/http-help';
import Config from '../utils/config';
import Loading from '../components/loading';
import Exchange from '../components/exchange';

const style = require('../scss/xuc.scss');
const xucImg = require('../resources/img/xuc-overview.png');

export default class Xuc extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
            exchangeData: []
        };
        this.formatData = this.formatData.bind(this);
    }

    componentDidMount() {
        const url = `${Config.API_PATH_EXCHANGE}?lang=${this.props.lang}&key=${Config.API_KEY}`;
        HttpHelp.HttpHelp.Get(url).then((res: object) => {
            this.setState({
                exchangeData: res,
                loading: false
            });
        });
    }

    formatData() {
        const data = this.state.exchangeData || [];
        let xucBtcData: any = [], xucEthData: any = [], xucUsdtData: any = [];
        data.map((item: any) => {
            if (item.xuC_BTC) {
                xucBtcData.push({
                    title: item.title,
                    logo: item.logo,
                    link: item.xuC_BTC_Link
                });
            }

            if (item.xuC_ETH) {
                xucEthData.push({
                    title: item.title,
                    logo: item.logo,
                    link: item.xuC_ETH_Link
                });
            }

            if (item.xuC_USDT) {
                xucUsdtData.push({
                    title: item.title,
                    logo: item.logo,
                    link: item.xuC_USDT_Link
                });
            }
        });
        return {
            BTCData: xucBtcData,
            ETHData: xucEthData,
            USDTData: xucUsdtData
        };
    }

    render () {
        const { i18n } = this.props;
        const { loading } = this.state;
        const exchangeData = this.formatData();
        return (
            <div className={style.xuc}>
                <div className={style.header}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition>
                        <p className={`${style.text} ${style.title}`}>
                            <span className={style['xuc-text']}>
                                {i18n.XUC_PAGE_TITLE_XUC}
                            </span>
                            <br />
                            {i18n.XUC_PAGE_SUB_TITLE}
                        </p>
                        </CustomTransition></ScrollInit>
                    </div>
                </div>
                <div className={style.overview}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.XUC_PAGE_PART1_TITLE} /></CustomTransition></ScrollInit>
                        <div className={style.svg}>
                            <div>
                                <p className={style.subtitle}>{i18n.XUC_PAGE_PART1_DESCRIPTION}</p>
                                <p className={style.info}>
                                    <span>{i18n.XUC_PAGE_PART1_TOKEN_STANDARD}</span>
                                    <a href="https://coinmarketcap.com/currencies/exchange-union/" target="_blank">{i18n.XUC_PAGE_PART1_TOKEN_SUPPLY}</a>
                                    <a href="https://coinmarketcap.com/currencies/exchange-union/" target="_blank">{i18n.XUC_PAGE_PART1_TOKEN_CIRCULATINGSUPPLY}</a>
                                    <a href={'https://etherscan.io/token/0xc324a2f6b05880503444451b8b27e6f9e63287cb'} target={'_blank'}>{i18n.XUC_PAGE_PART1_TOKEN_CONTRACT}</a>
                                </p>
                            </div>
                            <div>
                                <img src={xucImg} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.overview} style={{backgroundColor: '#f7f7f7'}}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.XUC_PAGE_PART2_TITLE} /></CustomTransition></ScrollInit>
                        <div className={style.links}>
                            <p>{i18n.XUC_PAGE_PART2_XUCBTC}</p>
                            {exchangeData.BTCData.map((item: any) => <Exchange key={Math.random()} data={item} />)}
                            {loading ? <Loading text={i18n.NEWS_PAGE_LOADING} /> : null}
                        </div>
                        <div className={style.links}>
                            <p>{i18n.XUC_PAGE_PART2_XUCETH}</p>
                            {exchangeData.ETHData.map((item: any) => <Exchange key={Math.random()} data={item} />)}
                            {loading ? <Loading text={i18n.NEWS_PAGE_LOADING} /> : null}
                        </div>
                        <div className={style.links}>
                            <p>{i18n.XUC_PAGE_PART2_XUCUSDT}</p>
                            {exchangeData.USDTData.map((item: any) => <Exchange key={Math.random()} data={item} />)}
                            {loading ? <Loading text={i18n.NEWS_PAGE_LOADING} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}