import React from 'react';
import './largete.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default class LargeText extends React.Component {
    render() {
        return (
                <div className='foo' data-delighter>
    
                    <Link  to="/portfolio" className="text" >My Portfolio</Link>
                    <div className='line_border foo2' data-delighter></div>
                </div>
        );
    }
}



