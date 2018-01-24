import * as React from 'react';
import { Link } from 'react-router-dom';
import Config from '../utils/config';

const style = require('../scss/blog-item.scss');

export default ( { data }: any ) => {
    return (
        <div className={style['blog-item']}>
            <Link to={data.link} target="_blank" >
            <img src={`${Config.IMAGE_URL}${data.imageUrl}`} />
            <footer>
                <div className={style.date}>
                    <span>{data.day}</span>
                    <span>{data.month} {data.year}</span>
                </div>
                <div className={style.info}>
                    <span>{data.source}</span>
                    <h4>{data.title}</h4>
                </div>
            </footer>
            </Link>
        </div>
    );
};