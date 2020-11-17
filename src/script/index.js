import React from 'react';
import ReactDom from "react-dom";
import '../style/index.less';

import { fn1 } from './util'
export const Component = (props) => {
    return(
        <div className="box">
            <p>{props.test}</p>
            {props.children}
        </div>
    )
}

ReactDom.render(
    <Component test="this is props test">hello world!</Component>,
    document.querySelector('.container')
)

import('./util.js')
.then(module => {
    module.fn1();
})
.catch(err => {
    console.error(err)
});

console.log(fn1())
