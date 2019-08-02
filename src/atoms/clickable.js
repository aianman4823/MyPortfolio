import React from 'react';
import Button from '@material-ui/core/Button';

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class TextButtons extends React.Component {
    render() {
        return (
            <div>
                <AnchorLink style={{textDecoration:'none'}} href="#link">
                    <Button style={{ color: 'white', fontSize: '20px' }} className='button'>Top</Button>
                </AnchorLink>
            </div>
        );
    }
}

