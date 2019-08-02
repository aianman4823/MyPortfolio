import React from 'react';
import Header2 from '../organisms/header2';

import './myworks.css';
import aktioblog from './Akitoblog.jpg';
import twitterbot from './twitterbot.jpg';
import timerapp from './timerapp.jpg';
import timerapp2 from './timerapp2.jpg';


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
                background: "linear-gradient(-45deg, rgba(131, 96, 96, .8), rgba(100, 130, 130, .5))",
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
            image: {
                width: this.state.sW / 1.3,
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '30px',
            },
            image_long: {
                height: this.state.sH / 1.3,
                width: 'auto',
                marginLeft: 'auto',
                marginRight: '70px',
                marginTop: '30px',
            }
        }
        return (
            <div>
                <div style={{ position: 'relative' }}>
                    {/* こいつはheader部分にあたり、固定させる */}
                    < Header2 style={{ position: 'absolute' }} />
                    {/* 画面いっぱいにいい感じのバックカラーと写真にして少しスライドさせたら次に自動スライド */}
                    < div id="link" style={styles.backcolor}>
                        <span style={styles.spantext}>My Works</span>
                        <span style={styles.spansmalltext}>About My Works</span>
                    </div >
                </div >
                <div>
                    <div style={styles.image}>
                        <img style={styles.image} src={aktioblog} alt="akitoblog" />
                        <span>
                            <h2><a className='a_text' href="https://memo-blog.herokuapp.com/">Akito Blog</a></h2>
                        </span>
                        <p>Python/ Djagno/ MySQL/ Heroku</p>
                        <p>このサイトは僕がプログラミング学習で学んだことをアウトプットする場所、
                            そして自分のためのメモ用として作ったサイトです。WordPressではなく
                            Djangoのみで作っていることがポイントです。デザインは綺麗とは言えないですが、
                            レスポンシブ対応させており、携帯でも見れるようにしています。
                        </p>
                        <br />
                        <hr />
                    </div>
                    <div style={styles.image}>
                        <img style={styles.image} src={twitterbot} alt="twitterbot" />
                        <span>
                            <h2><a className='a_text' href="https://twitter.com/CryptogramDo">Twitter Bot</a></h2>
                        </span>
                        <p>TwitterAPI/ Python/ Heroku</p>
                        <p>
                            これはTwitterでBot自作してみたいな、とふと思ったので調べて、Herokuのschedulerとpythonのapschedulerを
                            使い、自動でフォローしたり、リツイートしたりするBotをHerokuにデプロイしました。よければフォローお願いします。
                            フォローしてくださった方のツイートを優先的にリツイートする機能も追加していくつもりです。
                        </p>
                        <br />
                        <hr />
                    </div>
                    <div style={styles.image}>
                        <img style={styles.image_long} src={timerapp} alt="timerapp" />
                        <img style={styles.image_long} src={timerapp2} alt="timerapp2" />
                        <span>
                            <h2>Timer App</h2>
                        </span>
                        <p>Javascript/ React Native/ Expo/ SQLite</p>
                        <p>
                            このアプリはReact Nativeで初めて作ったアプリです。僕が受験期の頃、
                            タイマーで測ってやった回数などをメモしていたので、軽いメモとタイマーが一緒になったアプリを作ってみようと思い、作りました。
                            データベースはSQLiteを使いCRUDの機能を全て実装しました。アンドロイドではまだエラーが出るので、とりあえず、IOSアプリのみ先にリリースしようと思っています。
                        </p>
                        <br />
                        <hr />
                    </div>
                    <div style={styles.image}>
                        <p>
                            随時更新。。
                        </p>
                        
                        <small style={{textAlign:'center'}}>COPYRIGHT &#169; Akito's Portfolio ALL RIGHTS RESERVED.</small>
                    </div>
                    
                </div>


            </div>

        );
    }
}