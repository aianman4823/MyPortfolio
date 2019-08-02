import React from 'react';
import TextBox from '../molecules/textbox';
import TextBox2 from '../molecules/textbox2';
import TextBox3 from '../molecules/textbox3';
import TextBox4 from '../molecules/textbox4';

import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import Header from './header';



export default class PageList extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            sH: window.innerHeight,
            sW: window.innerWidth,
        }
        this.getWindowSize = this.getWindowSize.bind(this);
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
            scrollTop: 0,
            scrollSecond: this.state.sH,
        })
    }

    render() {
        const styles = {
            backcolor: {
                background: "linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8))",
                width: this.state.sW,
                height: this.state.sH
            },
            backcolor2: {
                background: "linear-gradient(-45deg, rgba(0, 180, 180, .5), rgba(0, 130, 10, .5))",
                width: this.state.sW,
                height: this.state.sH
            },
            backcolor3: {
                background: "linear-gradient(-45deg, rgba(131, 96, 96, .8), rgba(100, 130, 130, .5))",
                width: this.state.sW,
                height: this.state.sH
            },
            backcolor4: {
                background: "linear-gradient(-45deg, rgba(0, 180, 18, .5), rgba(255, 167, 167, .9))",
                width: this.state.sW,
                height: this.state.sH
            },
            header: {
                position: 'absolute',
                top: 5,
                left: 0,
                zIndex: 24,
            },
            navtop: {
                position: 'absolute',
                top: this.state.sH+10,
                left: this.state.sW / 2.2,
                zIndex: 1000,
            },
            navtop2: {
                position: 'absolute',
                top: this.state.sH * 2+10,
                left: this.state.sW / 2.2,
                zIndex: 1000,
            },
            navtop3: {
                position: 'absolute',
                top: this.state.sH * 3+10,
                left: this.state.sW / 2.2,
                zIndex: 1000,
            },
            navdown: {
                position: 'absolute',
                top: this.state.sH-70,
                left: this.state.sW / 2.2,
                zIndex: 1000,
            },
            navdown2: {
                position: 'absolute',
                top: this.state.sH*2-70,
                left: this.state.sW / 2.2,
                zIndex: 1000,
            },
            navdown3: {
                position: 'absolute',
                top: this.state.sH*3-70,
                left: this.state.sW / 2.2,
                zIndex: 1000,
            },
            fontstyle:{
                color:'white',
                fontSize:'50px',
                border:'solid 5px white',
                borderRadius:'100%'
            }
        }
        return (
            <div style={{ position: 'relative' }}>
                {/* こいつはheader部分にあたり、固定させる */}
                < Header style={{ position: 'absolute' }} />
                {/* 画面いっぱいにいい感じのバックカラーと写真にして少しスライドさせたら次に自動スライド */}
                < div id="link" style={styles.backcolor}
                    onScroll={() => {
                        const scrollTop = this.state.scrollTop;
                        console.log(scrollTop)
                    }}>
                    <TextBox />
                    <div style={styles.navdown}>
                        <AnchorLink href="#link1" >
                            <ArrowDownward style={styles.fontstyle}/>
                        </AnchorLink>
                    </div>
                </div >
                <div id="link1" style={styles.backcolor2}>
                    <div style={styles.navtop}>
                        <AnchorLink href="#link" >
                            <ArrowUpward style={styles.fontstyle}/>
                        </AnchorLink>
                    </div>
                    <TextBox2 />
                    <div style={styles.navdown2}>
                        <AnchorLink href="#link2" >
                            <ArrowDownward style={styles.fontstyle}/>
                        </AnchorLink>
                    </div>
                </div>
                <div id="link2" style={styles.backcolor3}>
                    <div style={styles.navtop2}>
                        <AnchorLink href="#link1" >
                            <ArrowUpward style={styles.fontstyle}/>
                        </AnchorLink>
                    </div>
                    <TextBox3 />
                    <div style={styles.navdown3}>
                        <AnchorLink href="#link3" >
                            <ArrowDownward style={styles.fontstyle}/>
                        </AnchorLink>
                    </div>
                </div>
                <div id="link3" style={styles.backcolor4}>
                    <div style={styles.navtop3}>
                        <AnchorLink href="#link2" >
                            <ArrowUpward style={styles.fontstyle}/>
                        </AnchorLink>
                    </div>
                    <TextBox4 />
                </div>
            </div >
        );
    }
}

