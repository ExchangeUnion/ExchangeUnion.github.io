import * as React from 'react';
import Config from '../utils/config';

export default ({ data }: any) => (
    <a href={data.link} target="_blank">
        <img
            style={{marginTop: data.title === 'etherdelta' ? '20px' : ''}}
            alt={data.title}
            title={data.title}
            src={`${Config.IMAGE_URL}${data.logo}`}
        />
    </a>
);