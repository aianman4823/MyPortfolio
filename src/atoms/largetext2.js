import React from 'react';
import './largete.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default class LargeText2 extends React.Component {
    render() {
        return (
                <div className='foo' data-delighter>
                    <Link to="/about" className="text" >About Me</Link>
                    <div className='line_border foo2' data-delighter></div>
                </div>
        );
    }
}
