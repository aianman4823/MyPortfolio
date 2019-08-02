import React from 'react';
import LargeText4 from '../atoms/largetext4';
import SmallText from '../atoms/smalltext';
import SmallText4 from '../atoms/smalltext4';


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
                    <LargeText4 />
                </div>
                <div>
                    <SmallText4/>
                </div>
            </div>
        );
    }
}