import React from 'react';
import Header2 from '../organisms/header2';


import ContactForm from './contactForm';



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
                background: "linear-gradient(-45deg, rgba(0, 180, 18, .5), rgba(255, 167, 167, .9))",
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
            footer:{
                width: "100%",
                textAlign: "center",
                
            },
        }
        return (
            <div>
                <div style={{ position: 'relative' }}>
                    {/* こいつはheader部分にあたり、固定させる */}
                    < Header2 style={{ position: 'absolute' }} />
                    {/* 画面いっぱいにいい感じのバックカラーと写真にして少しスライドさせたら次に自動スライド */}
                    < div id="link" style={styles.backcolor}>
                        <span style={styles.spantext}>Contact</span>
                        <span style={styles.spansmalltext}>How to contact me ?</span>
                    </div >

                </div >
                <div>
                    <ContactForm />
                    <footer style={styles.footer}>
                        <p>COPYRIGHT &#169; Akito's Portfolio ALL RIGHTS RESERVED.	</p>
                    </footer>
                </div>
            </div>

        );
    }
}