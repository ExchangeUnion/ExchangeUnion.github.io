import * as React from 'react';
import * as ReactGA from 'react-ga';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
import PageTitle from '../components/page-title';
import Config from '../utils/config';

const style = require('../scss/how-to-works.scss');
const exchangeImg = require('../resources/img/exchange-union-icon.png');
const paperImg = require('../resources/img/paper-download.png');

export default class HowToWorks extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onPDFdownload = this.onPDFdownload.bind(this);
    }

    componentDidMount () {
        this.props.setPageview('/how_it_works');
    }

    onPDFdownload () {
        ReactGA.event({category: 'PDF', action: 'PDFdownload', label: 'whitePaper'});
    }

    render () {
        const { i18n, lang } = this.props;
        let pdfUrl = Config.EN_PDF_DOWNLOAD_URL;
        if (lang === 'zh-CN') {
            pdfUrl = Config.ZH_PDF_DOWNLOAD_URL;
        }
        return (
            <div className={style['how-to-works']}>
                <div className={style.header}>
                    <div className={style.content}>
                        <ScrollInit>
                            <CustomTransition>
                                <p className={style.title}>{i18n.HOW_IT_WORKS_PAGE_TITLE}</p>
                            </CustomTransition>
                        </ScrollInit>
                    </div>
                </div>
                <div className={style.basics}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.HOW_IT_WORKS_PAGE_PART1_TITLE} /></CustomTransition></ScrollInit>
                        <div className={style.text}>
                            <p>{i18n.HOW_IT_WORKS_PAGE_PART1_DESCRIPTION}</p>
                            <img src={exchangeImg}/>
                        </div>
                    </div>
                </div>
                <div className={style.read}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.HOW_IT_WORKS_PAGE_PART2_TITLE} /></CustomTransition></ScrollInit>
                        <div className={style.download}>
                            <a href={pdfUrl} target="_blank" onClick={() => {this.onPDFdownload(); }}>
                                <img src={paperImg} />
                                <span>{i18n.HOW_IT_WORKS_PAGE_PART2_PDF2}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}