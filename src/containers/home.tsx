import * as React from 'react';
import CustomTransition from '../components/custom-transition';
import ScrollInit from '../components/scroll';
import PageTitle from '../components/page-title';
import Particles from 'react-particles-js';

import TimeLineItem from '../components/time-line-item';
import TimeLineIcon1 from '../resources/icon/timeline-1';
import TimeLineIcon2 from '../resources/icon/timeline-2';
import TimeLineIcon3 from '../resources/icon/timeline-3';
import TimeLineIcon4 from '../resources/icon/timeline-4';
import TimeLineIcon5 from '../resources/icon/timeline-5';
import ArrowIcon from '../resources/icon/arrow';

const data = require('../services/data.json');
const style = require('../scss/home.scss');
const exchangeImg = require('../resources/img/exchange-union-icon.png');

export interface TimeLine {
    icon: number;
    dateTranslateKey: string;
    titleTranslateKey: string;
    stageTranslateKey: string;
    active: boolean;
}

const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.1,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 10,
            random: true,
            anim: {
                enable: false,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 2
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'grab'
            },
            onclick: {
                enable: false,
                mode: 'push'
            },
            resize: false
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: false
};

export default class Home extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            time: 1,
            init1: true,
            init2: true,
            init3: true
        };
        this.openModal = this.openModal.bind(this);
        this.onScrollToPart2 = this.onScrollToPart2.bind(this);
    }

    componentDidMount () {
        this.props.setPageview('/');
    }

    onGetIcon(icon: number) {
        let iconComponent;
        switch (icon) {
            case 1:
                iconComponent = TimeLineIcon1;
                break;
            case 2:
                iconComponent = TimeLineIcon2;
                break;
            case 3:
                iconComponent = TimeLineIcon3;
                break;
            case 4:
                iconComponent = TimeLineIcon4;
                break;
            case 5:
                iconComponent = TimeLineIcon5;
                break;
            default:
                iconComponent = null;
                break;
        }

        return iconComponent;
    }

    openModal() {
        this.props.openModal();
    }

    onScrollToPart2() {
       const interval = setInterval(() => {
            let bodyScrollTop = window.scrollY;
            if (window.navigator.userAgent.indexOf('Trident/7.0') >= 0) {
               bodyScrollTop = document.documentElement.scrollTop;
            }

            if (bodyScrollTop >= (window.innerHeight - 67)) {
                clearInterval(interval);
            } else {
                window.scroll(0, bodyScrollTop + 70);
            }
        }, 30);
    }

    render() {
        const { i18n } = this.props;

        return (
            <div className={style.home}>
                <div className={style.header} style={{height: window.innerHeight - 67}}>
                    <Particles className={style.canvas} params={particlesOptions} />
                    <div className={style.content}>
                        <ScrollInit>
                            <CustomTransition>
                                <h1>{i18n.HOME_PAGE_BANNER_TITLE}</h1>
                                <h2>{i18n.HOME_PAGE_BANNER_SUB_TITLE}</h2>
                                <button onClick={this.openModal}>{i18n.COMMON_JOIN_NOW_BUTTON_TEXT}</button>
                                <span className={style.arrow}>
                                    <a href={'javascript:void(0)'} onClick={this.onScrollToPart2}><ArrowIcon /></a>
                                </span>
                            </CustomTransition>
                        </ScrollInit>
                    </div>
                </div>
                <div className={style.part2}>
                    <div className={style.content}>
                        <div className={style.text}>
                            <ScrollInit>
                                <CustomTransition><h2><span>{i18n.HOME_PAGE_PART2_TITLE}</span></h2></CustomTransition>
                            </ScrollInit>
                            <p>{i18n.HOME_PAGE_PART2_CONTENT}</p>
                            <button onClick={this.openModal}>{i18n.COMMON_JOIN_NOW_BUTTON_TEXT}</button>
                        </div>
                        <img src={exchangeImg}/>
                    </div>
                </div>
                <div className={style.part3}>
                    <div className={style.content}>
                        <div className={style['right-text']}>
                            <ScrollInit>
                                <CustomTransition><h4><span>{i18n.HOME_PAGE_PART3_TITLE}</span></h4></CustomTransition>
                            </ScrollInit>
                            <p>{i18n.HOME_PAGE_PART3_CONTENT}</p>
                            <dl>
                                <dd>{i18n.HOME_PAGE_PART3_CONTENT2}</dd>
                                <dd>{i18n.HOME_PAGE_PART3_CONTENT3}</dd>
                                <dd>{i18n.HOME_PAGE_PART3_CONTENT4}</dd>
                                <dd>{i18n.HOME_PAGE_PART3_CONTENT5}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className={style.part4}>
                    <div className={style.content}>
                        <ScrollInit>
                            <CustomTransition>
                                <PageTitle title={i18n.HOME_PAGE_PART4_TITLE} />
                            </CustomTransition>
                        </ScrollInit>
                        <div className={style['time-line']}>
                        {
                            data.time_line_list.map((item: TimeLine) => {
                                const iconComponent = this.onGetIcon(item.icon);
                                const dataItem = {
                                    icon: iconComponent,
                                    date: i18n[item.dateTranslateKey],
                                    title: i18n[item.titleTranslateKey],
                                    stage: i18n[item.stageTranslateKey],
                                    active: item.active
                                };
                                return (
                                    <TimeLineItem key={Math.random()} data={dataItem}/>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}