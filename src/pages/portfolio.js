import React from 'react';
import Header2 from '../organisms/header2';

import "./portfolio.css";

export default class Portfolio extends React.Component {
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
                height: this.state.sH/2.5,
            },
            
            spansmalltext:{
                position:'absolute',
                top:this.state.sH/4,
                width:'100%',
                textAlign:'center',
                color:'white',
                fontSize:'20px',
                fontWeight:700,
            },
        }
        return (
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                {/* こいつはheader部分にあたり、固定させる */}
                < Header2 style={{ position: 'absolute' }} />
                {/* 画面いっぱいにいい感じのバックカラーと写真にして少しスライドさせたら次に自動スライド */}
                < div id="link" style={styles.backcolor}>
                    <span className='spantext' >My Portfolio</span>
                    <span style={styles.spansmalltext}>About My Portfolio</span>
                </div >

                {/* メインコンテンツ */}
                <div>
                    <div>
                        <img />
                        <span>About Me</span>
                    </div>
                    <div>
                        <img />
                        <span>My Works</span>
                    </div>
                    <div>
                        <img />
                        <span>Contact</span>
                    </div>
                </div>
            </div >


            </div>
            
        );
    }
}