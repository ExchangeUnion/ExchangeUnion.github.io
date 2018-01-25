import * as React from 'react';

export default ({color}: any) => (
    <svg width="20px" height="20px"  viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="15" x2="15" y2="1" stroke={color} strokeWidth="2"/>
        <line x1="1" y1="1" x2="15" y2="15" stroke={color} strokeWidth="2"/>
    </svg>
);