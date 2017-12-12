import * as React from 'react';
import Lottie from 'react-lottie';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
import PageTitle from '../components/page-title';
import UserBaseSVG from '../resources/icon/user-base';
import UserExperienceSVG from '../resources/icon/user-experience';

const style = require('../scss/use-cases.scss');
const mapAnimationData = require('../resources/animation-data/map.json');

const mapOptions = {
    loop: true,
    autoplay: true,
    animationData: mapAnimationData
};

export default class UseCases extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render () {
        const { i18n } = this.props;
        return (
            <div className={style['use-cases']}>
                <div className={style.header}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><p className={style.title}>{i18n.USE_CASE_PAGE_TITLE}</p></CustomTransition></ScrollInit>
                    </div>
                </div>
                <div className={style.cross}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.USE_CASE_PAGE_PART1_TITLE}/></CustomTransition></ScrollInit>
                        <p>{i18n.USE_CASE_PAGE_PART1_DESCRIPTION01}<br />{i18n.USE_CASE_PAGE_PART1_DESCRIPTION02}</p>
                        <Lottie options={mapOptions} />
                    </div>
                </div>
                <div className={style.base}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.USE_CASE_PAGE_PART2_TITLE}/></CustomTransition></ScrollInit>
                        <p>{i18n.USE_CASE_PAGE_PART2_DESCRIPTION}</p>
                        <UserBaseSVG />
                    </div>
                </div>
                <div className={style.experience}>
                    <div className={style.content}>
                        <ScrollInit><CustomTransition><PageTitle title={i18n.USE_CASE_PAGE_PART3_TITLE}/></CustomTransition></ScrollInit>
                        <p>{i18n.USE_CASE_PAGE_PART3_DESCRIPTION}</p>
                        <UserExperienceSVG />
                    </div>
                </div>
            </div>
        );
    }
}