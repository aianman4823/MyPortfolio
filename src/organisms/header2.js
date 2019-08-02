import React from 'react';

import TextButtons from '../atoms/clickable';
import MenuButton from '../molecules/menubutton';
import TextButtons2 from '../atoms/clickable2';



export default class Header2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sW: window.innerWidth,
            sH: window.innerHeight
        }
    }
    componentWillMount() {
        window.addEventListener('resize', () => {
            this.getWindowSize()
        })
    }

    getWindowSize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.setState({
            sW: w,
            sH: h,
        })
    }


    render() {
        const styles = {
            header: {
                float: 'left',
            },
            header2: {
                marginLeft: this.state.sW - 90,
                marginRight: '0',
                position: 'absolute'
            },
            wrapper: {
                display: 'block',
                width: '100%',
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 1000,
                textAlign: 'center',
            },
        }
        return (
            <div style={styles.wrapper}>
                <div style={styles.header}>
                    <TextButtons2 />
                </div>
                <div style={styles.header2}>
                    <MenuButton />
                </div>
            </div>
        )
    }
}