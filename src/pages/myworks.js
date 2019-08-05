import React from 'react';
import Header2 from '../organisms/header2';

import './myworks.css';


import firebase from '../firebase/firebase';



export default class Portfolio extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            sH: window.innerHeight,
            sW: window.innerWidth,
            lists: []
        }
        this.getWindowSize = this.getWindowSize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.getWindowSize()
        });
        var db = firebase.firestore();
        db.collection("works")
            .orderBy('created_at')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data);
                this.setState({ lists: data });
            });
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
        const { lists } = this.state;
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
                        {lists.map(value => (
                            <div style={styles.image}>
                                <img style={styles.image} src={value.file} alt="file"/>
                                <span>
                                    <h2><a className='a_text' href={value.url}>{value.title}</a></h2>
                                </span>
                                <p>{value.language}</p>
                                <p>
                                    {value.text}
                                </p>
                                <br />
                                <hr />
                            </div>
                        ))}
                    </div>

                    <div style={styles.image}>
                        <p>
                            随時更新。。
                        </p>

                        <small style={{ textAlign: 'center' }}>COPYRIGHT &#169; Akito's Portfolio ALL RIGHTS RESERVED.</small>
                    </div>
                </div>
            </div>

        );
    }
}