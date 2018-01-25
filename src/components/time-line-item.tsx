import * as React from 'react';

const style = require('../scss/time-line-item.scss');

export default ( { data }: any ) => (
    <div className={style['time-line-item']}>
        <span><data.icon /></span>
        <h4>{data.date}</h4>
        <p>{data.title}</p>
        <span className={style.line}><i className={data.active ? `${style.active}` : ''} /></span>
        <span className={data.active ? `${style.state} ${style.active}` : `${style.state}`}>{data.stage}</span>
    </div>
);