import * as React from 'react';

const style = require('../scss/page-title.scss');

export default ( { title }: any ) => {
    return (
        <h2 className={style.title}>{title}<span /></h2>
    );
};