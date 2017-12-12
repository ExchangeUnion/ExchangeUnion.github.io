import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Contact from '../components/contact';
import CloseIcon from '../resources/icon/close';
import Routes from '../route/routes';
import Header from '../components/header';
import Footer from '../components/footer';

const style = require('../scss/app.scss');

export interface AppState {
    userToken: string;
    isLoadingUserToken: boolean;
    modalIsOpen: boolean;
    close: boolean;
    lang: string;
    scrollTop: number;
}

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(25, 81, 163, 1)',
        zIndex: '999'
    },
    content : {
        top                   : '20%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, 0)',
        backgroundColor: 'rgba(0,0,0,0)',
        border: '0'
    }
};

@withRouter
export default class App extends React.Component<any, AppState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            userToken: '',
            isLoadingUserToken: true,
            modalIsOpen: false,
            close: false,
            lang: window.navigator.language,
            scrollTop: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
    }

    async componentDidMount() {
        const historyLang = localStorage.getItem('RXhjaGFuZ2VVbmlvbi1DdXJyZW50LUxhbmc=');
        let lang = window.navigator.language;
        if (historyLang) {
            historyLang === 'emgtQ04=' ? lang = 'zh-CN' : lang = 'en-US';
        }
        this.setState({isLoadingUserToken: false, lang: lang});
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    updateUserToken = (userToken) => {
        this.setState({
            userToken: userToken
        });
    }

    handleScroll(event) {
        let bodyScrollTop = window.scrollY;

        if (window.navigator.userAgent.indexOf('Trident/7.0') >= 0) {
            bodyScrollTop = document.documentElement.scrollTop;
        }

        const body = document.body;
        if (bodyScrollTop > 10) {
            body.classList.add('scroll-header-style');
        }else {
            body.classList.remove('scroll-header-style');
        }
    }

    openModal() {
        this.setState({modalIsOpen: true});
        setTimeout(() => {
            this.setState({close: true});
        });
    }

    closeModal() {
        this.setState({close: false});
        setTimeout(() => {
            this.setState({modalIsOpen: false});
        }, 350);
    }

    onChangeLanguage(lang) {
        localStorage.setItem('RXhjaGFuZ2VVbmlvbi1DdXJyZW50LUxhbmc=', lang === 'zh-CN' ? 'emgtQ04=' : 'ZW4tVVM=');
        this.setState({
            lang: lang
        });
    }

    render() {
        let i18n = require('../i18n/en-US.json');
        if (this.state.lang === 'zh-CN') {
            i18n = require('../i18n/zh-CN.json');
        }

        const childProps = {
            userToken: null,
            updateUserToken: this.updateUserToken,
            openModal: this.openModal,
            i18n: i18n,
            lang: this.state.lang
        };

        const { location } = this.props;
        let isHome = false;
        location.pathname === '/' ? isHome = true : isHome = false;

        return (
            !this.state.isLoadingUserToken &&
            <div className={isHome ? `${style.app} ${style.home}` : `${style.app}`} >
                <Header key="web-header" isHome={isHome} i18n={i18n} openModal={this.openModal}/>
                <main key="web-main" className={style.content}>
                    <Routes childProps={childProps} />
                </main>
                <Footer key="web-footer" i18n={i18n} changeLanguage={this.onChangeLanguage} lang={this.state.lang}/>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    overlayClassName={{
                        base: this.state.close ? 'contact-over-flow contact-over-flow-open-d' : 'contact-over-flow contact-over-flow-close-d',
                        afterOpen: 'contact-over-flow-open',
                        beforeClose: 'contact-over-flow-close'
                    }}
                    shouldCloseOnOverlayClick={false}
                    contentLabel="Exchange Union"
                >
                        <Contact i18n={i18n} close={this.state.close} lang={this.state.lang}/>
                    <a className="contact-close" onClick={this.closeModal}><CloseIcon color={'#fff'} /></a>
                </Modal>
            </div>
        );
    }
}