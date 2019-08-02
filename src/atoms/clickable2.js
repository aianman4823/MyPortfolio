import React from 'react';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

export default class TextButtons2 extends React.Component {
    render() {
        return (
            <div>
                <Link style={{textDecoration:'none'}} to="/">
                    <Button style={{ color: 'white', fontSize: '20px' }} className='button'>HOME</Button>
                </Link>
            </div>
        );
    }
}