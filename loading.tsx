import * as React from 'react';
import Lottie from 'react-lottie';

const loadingAnimationData = require('../resources/animation-data/loading2.json');
const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData
};

export default ({ text }: any) => (
    <div style={{margin: '0 auto', color: '#2dabe2'}}>
        <Lottie options={loadingOptions} height={60} width={60} />
        <p>{text}</p>
    </div>
);