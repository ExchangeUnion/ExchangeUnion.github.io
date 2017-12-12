import * as React from 'react';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
const style = require('../scss/privacy.scss');

export default class Privacy extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render () {
        const { i18n } = this.props;
        return (
            <div className={style.privacy}>
                <div className={style.header}>
                    <ScrollInit><CustomTransition><div className={style.content}>
                        {i18n.PRIVACY_PAGE_TITLE}
                    </div></CustomTransition></ScrollInit>
                </div>
                <div className={style.text}>
                    <div className={style.content}>
                        <div>{i18n.PRIVACY_PAGE_LAST_REVISION}</div>
                        <div>{i18n.PRIVACY_PAGE_DESCRIPTION}</div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE1}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT1}
                        </div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE2}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT2}
                        </div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE3}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT3}
                        </div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE4}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT4}
                            <span className={style.list}>
                                {i18n.PRIVACY_PAGE_CONTENT4a}
                                {i18n.PRIVACY_PAGE_CONTENT4b}
                                {i18n.PRIVACY_PAGE_CONTENT4c}
                                {i18n.PRIVACY_PAGE_CONTENT4d}
                                {i18n.PRIVACY_PAGE_CONTENT4e}
                                {i18n.PRIVACY_PAGE_CONTENT4f}
                            </span>
                        </div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE5}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT5}
                            <span className={style.list}>
                                {i18n.PRIVACY_PAGE_CONTENT5a}
                                {i18n.PRIVACY_PAGE_CONTENT5b}
                                {i18n.PRIVACY_PAGE_CONTENT5c}
                                {i18n.PRIVACY_PAGE_CONTENT5d}
                                {i18n.PRIVACY_PAGE_CONTENT5e}
                                {i18n.PRIVACY_PAGE_CONTENT5f}
                            </span>
                        </div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE6}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT6}
                        </div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE7}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT7}
                        </div>
                        <div>
                            <h4>{i18n.PRIVACY_PAGE_TITLE8}</h4>
                            {i18n.PRIVACY_PAGE_CONTENT8}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}