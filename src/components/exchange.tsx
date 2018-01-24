import * as React from 'react';
import * as ReactGA from 'react-ga';
import Config from '../utils/config';

export default ({ data }: any) => (
    <a href={data.link} target="_blank" onClick={() => {ReactGA.event({category: 'XUC', action: 'linkClick', label: data.title}); }}>
        <img
            style={{marginTop: data.title === 'etherdelta' ? '20px' : ''}}
            alt={data.title}
            title={data.title}
            src={`${Config.IMAGE_URL}${data.logo}`}
        />
    </a>
);