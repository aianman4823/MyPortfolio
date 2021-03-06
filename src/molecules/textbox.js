import React from 'react';
import LargeText from '../atoms/largetext';
import SmallText from '../atoms/smalltext';


export default class TextBox extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sW:window.innerWidth,
            sH:window.innerHeight
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
            boxtext:{
                paddingTop:this.state.sH/2.6,
                fontWeight:700,
            }
        }
        return (
            <div style={styles.boxtext}>
                <div>
                    <LargeText />
                </div>
                <div>
                    <SmallText/>
                </div>
            </div>
        );
    }
}

