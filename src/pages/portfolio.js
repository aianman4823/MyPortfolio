import React from 'react';
import Header2 from '../organisms/header2';

import { BrowserRouter, Route, Link } from 'react-router-dom';

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
                height: this.state.sH / 2.5,
            },
            backcolor2: {
                background: "linear-gradient(-45deg, rgba(0, 180, 180, .5), rgba(0, 130, 10, .5))",
                width: this.state.sW,
                height: this.state.sH / 2.5,
            },
            backcolor3: {
                background: "linear-gradient(-45deg, rgba(131, 96, 96, .8), rgba(100, 130, 130, .5))",
                width: this.state.sW,
                height: this.state.sH / 2.5,
            },
            backcolor4: {
                background: "linear-gradient(-45deg, rgba(0, 180, 18, .5), rgba(255, 167, 167, .9))",
                width: this.state.sW,
                height: this.state.sH / 2.5,
            },

            spansmalltext: {
                position: 'absolute',
                top: '190px',
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 700,
            },
            spansmalltext2: {
                position: 'absolute',
                top: '470px',
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 700,
            },
            spansmalltext3: {
                position: 'absolute',
                top: '800px',
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 700,
            },
            spansmalltext4: {
                position: 'absolute',
                top: '1100px',
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 700,
            },
        }
        return (
            <div style={{ position: 'relative', width: '100%' }}>
                <div style={{ position: 'relative' }}>
                    {/* こいつはheader部分にあたり、固定させる */}
                    < Header2 style={{ position: 'absolute' }} />
                    {/* 画面いっぱいにいい感じのバックカラーと写真にして少しスライドさせたら次に自動スライド */}
                    < div id="link" style={styles.backcolor}>
                        <span className='spantext' >My Portfolio</span>
                        <span style={styles.spansmalltext}>About My Portfolio</span>
                    </div >
                </div>
                {/* メインコンテンツ */}
                <div>
                    <div style={{ position: 'relative' }}>
                        < div id="link" style={styles.backcolor2}>
                            <Link to='/about'><span className='spantext2' >About Me</span></Link>
                            <span style={styles.spansmalltext}>Who I am ?</span>
                        </div >
                    </div>
                    <div style={{ position: 'relative' }}>
                        < div id="link" style={styles.backcolor3}>
                            <Link to="/works"><span className='spantext2' >My Works</span></Link>
                            <span style={styles.spansmalltext}>About My works</span>
                        </div >
                    </div>
                    <div style={{ position: 'relative' }}>
                        < div id="link" style={styles.backcolor4}>
                            <Link to='/contact'><span className='spantext2' >Contact</span></Link>
                            <span style={styles.spansmalltext}>How to contact ?</span>
                        </div >
                        <footer className='footer_portfolio'>
                            <p>COPYRIGHT &#169; Akito's Portfolio ALL RIGHTS RESERVED.	</p>
                        </footer>
                    </div>
                </div>

            </div>

        );
    }
}