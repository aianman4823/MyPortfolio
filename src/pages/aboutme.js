import React from 'react';
import Header2 from '../organisms/header2';

import prof from './fishing.png';

import './aboutme.css';


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
                background: "linear-gradient(-45deg, rgba(0, 180, 180, .5), rgba(0, 130, 10, .5))",
                width: this.state.sW,
                height: this.state.sH / 2.5,
            },
            spantext: {
                position: 'absolute',
                top: this.state.sH / 10,
                color: 'white',
                fontSize: '70px',
                fontWeight: 700,
                width: '100%',
                textAlign: 'center',
            },
            spansmalltext: {
                position: 'absolute',
                top: this.state.sH / 4,
                width: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 700,
            },
            row: {
                float: "left",
                padding: '5px',
            },
            syoukai: {
                marginBottom: "40px"
            },
            p_stg: {
                fonSize: "14px",
                lineHeight: "26px"
            },
            top: {
                width: "150px",
                height: "auto",
                float: "left",
            },
        }
        return (
            <div>
                <div style={{ position: 'relative' }}>
                    {/* こいつはheader部分にあたり、固定させる */}
                    < Header2 style={{ position: 'absolute' }} />
                    {/* 画面いっぱいにいい感じのバックカラーと写真にして少しスライドさせたら次に自動スライド */}
                    < div id="link" style={styles.backcolor}>
                        <span style={styles.spantext}>About Me</span>
                        <span style={styles.spansmalltext}>Who I am ?</span>
                    </div >
                </div >

                <div className="main">
                    <div className="profStg">
                        <p>東京海洋大学に在学中の学生です。<br />
                            大学3年の4月からプログラミングスクール(code-ship)に通ってます。<br />
                            python,javascriptをメインに学習しています。<br/>
                            フレームワークはDjango,React,ReactNativeです。
                        </p>
                    </div>
                    <div className="photo">
                        <img style={styles.top} src={prof} alt="fishing" />
                    </div>

                    <div style={{width: this.state.sW }} >
                        <div className="topics" >
                            <dl>
                                <dt>名前：</dt>
                                <dd>原田　明斗 (Akito Harada)</dd>

                                <dt>所属大学：</dt>
                                <dd>お魚くん大学所属　３年</dd>

                                <dt>出身：</dt>
                                <dd>山口県の田舎</dd>

                                <dt>サークル：</dt>
                                <dd>深海魚同好会, エンジニア部(仮)</dd>

                                <dt>趣味：</dt>
                                <dd>シュノーケリング, スピアフィッシング, 釣り,etc.</dd>

                                <dt>好きな格言：</dt>
                                <dd>運命よ、そこをどけ、俺が通る　 </dd>
                            </dl>
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}