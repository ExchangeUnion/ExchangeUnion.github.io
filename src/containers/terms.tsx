import * as React from 'react';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
const style = require('../scss/terms.scss');

export default class Teams extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { i18n } = this.props;
        return (
            <div className={style.teams}>
                <div className={style.header}>
                    <ScrollInit>
                        <CustomTransition>
                            <div className={style.content}>{i18n.TERMS_PAGE_TITLE}</div>
                        </CustomTransition>
                    </ScrollInit>
                </div>
                <div className={style.text}>
                    <div className={style.content}>
                        <p>{i18n.TERMS_PAGE_LAST_REVISION}</p>
                        <p>{i18n.TERMS_PAGE_LAST_DISCLAIMER}</p>
                        <p>{i18n.TERMS_PAGE_LAST_DESCRIPTION}</p>
                        <p>{i18n.TERMS_PAGE_CONTENT1}</p>
                        <p>{i18n.TERMS_PAGE_CONTENT2}</p>
                        <p>{i18n.TERMS_PAGE_CONTENT3}</p>
                        <p>{i18n.TERMS_PAGE_CONTENT4}</p>
                        <p>{i18n.TERMS_PAGE_CONTENT5}</p>
                        <p>{i18n.TERMS_PAGE_CONTENT6}</p>
                    </div>
                </div>
            </div>
        );
    }
}