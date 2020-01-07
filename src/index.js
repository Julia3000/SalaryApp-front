import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const menu = (
    <ul className={'menu'}>
        <li><a href={'first'}>First page</a></li>
        <li><a href={'first'}>Second page</a></li>
        <li><a href={'first'}>Third page</a></li>
    </ul>
);

ReactDOM.render(
    menu,
    document.getElementById('menu')
);
