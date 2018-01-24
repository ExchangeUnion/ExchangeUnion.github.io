import * as React from 'react';
import Config from '../utils/config';

const style = require('../scss/team-item.scss');

export default ( { data, type }: any ) => {
    return (
        <div className={type === 'coreTeam' ? `${style['team-item']} ${style.core}` : `${style['team-item']} ${style.advisors}`}>
            <div className={style.main}>
                <img src={`${Config.IMAGE_URL}${data.picture}`} />
                <h4>{data.name}</h4>
                {
                    type === 'coreTeam'
                        ? <p className={style.position}>{data.position}</p>
                        : null
                }
                <p>{data.description}</p>
            </div>
        </div>
    );
};