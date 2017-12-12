import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import MenuIcon from '../resources/icon/mobile-menu';

const style = require('../scss/header.scss');
const homeLogo = require('../resources/img/logo.png');
const pageLogo = require('../resources/img/logo2.png');

const homeOpenAnimationData = require('../resources/animation-data/menu-open-witer.json');
const homeCloseAnimationData = require('../resources/animation-data/menu-close-witer.json');
const openAnimationData = require('../resources/animation-data/menu-open.json');
const closeAnimationData = require('../resources/animation-data/menu-close.json');

let loadingOptions = {
    loop: false,
    autoplay: true,
    animationData: openAnimationData
};

let homeAnimationOption = {
    loop: false,
    autoplay: true,
    animationData: homeOpenAnimationData
};

const activeStyle = {
    color: 'rgba(18, 76, 138, 1)'
};

export default class Header extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            modalIsOpen: false,
            navMin: false,
            close: false
        };
        this.onMinNav = this.onMinNav.bind(this);
        this.onRemoveMinNav = this.onRemoveMinNav.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.props.openModal();
    }

    onMinNav() {
        this.setState({
            navMin: true,
            close: false
        });
    }

    onRemoveMinNav() {
        this.setState({
            close: true
        });
        setTimeout(() => {
            this.setState({
                navMin: false
            });
        }, 600);
    }

    render() {
        const { isHome, i18n } = this.props;

        if (!this.state.close) {
            loadingOptions.animationData = openAnimationData;
            homeAnimationOption.animationData = homeOpenAnimationData;
        }else {
            loadingOptions.animationData = closeAnimationData;
            homeAnimationOption.animationData = homeCloseAnimationData;
        }

        return (
            <div>
                <header key="header" className={isHome ? `${style.header} ${style.home}` : style.header}>
                    <div className={this.state.close ? `${style.content} ${style['close-menu']}` : style.content}>
                        <div className={isHome ? 'min-header home-min-header' : 'min-header'}>
                            <Link to="/" className={style.logoLink}>
                                <img className="normal-logo" src={isHome ? homeLogo : pageLogo} title={'exchange union'} alt={'exchange union'}/>
                                <img className="scroll-logo" src={pageLogo} title={'exchange union'} alt={'exchange union'}/>
                            </Link>
                            <div className={style.min}>
                                <a href="javascript:void(0)" onClick={!this.state.navMin ? this.onMinNav : this.onRemoveMinNav}>
                                    {
                                        isHome
                                            ?
                                            <span className="writeicon">
                                                {
                                                    this.state.navMin
                                                        ? <Lottie
                                                            options={homeAnimationOption}
                                                            height={24}
                                                            width={24}
                                                        />
                                                        : <MenuIcon color="#fff" />
                                                }
                                            </span>
                                        : null
                                    }
                                    <span>
                                        {
                                            this.state.navMin
                                            ? <Lottie
                                                options={loadingOptions}
                                                height={24}
                                                width={24}
                                            />
                                            : <MenuIcon color="#2DABE2" />
                                        }
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className={this.state.navMin ? style.navmin : ''}>
                            <ul className={style.navlinks} onClick={this.onRemoveMinNav}>
                                <li><NavLink to="/how_it_works" activeStyle={activeStyle} >{i18n.HOW_IT_WORKS_HEADER_TITLE}</NavLink></li>
                                <li><NavLink to="/use_cases" activeStyle={activeStyle} >{i18n.USE_CASES_HEADER_TITLE}</NavLink></li>
                                <li><NavLink to="/xuc" activeStyle={activeStyle} >{i18n.XUC_HEADER_TITLE}</NavLink></li>
                                <li><NavLink to="/team" activeStyle={activeStyle} >{i18n.TEAM_HEADER_TITLE}</NavLink></li>
                                <li><NavLink to="/news" activeStyle={activeStyle} >{i18n.NEWS_HEADER_TITLE}</NavLink></li>
                                <li><a href="javascript:void(0)" onClick={this.openModal}>{i18n.CONTACT_HEADER_TITLE}</a></li>
                            </ul>
                        </div>

                    </div>
                </header>

            </div>
        );
    }
}