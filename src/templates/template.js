import React from 'react';
import PageList from '../organisms/pagelist';


// ここで画面幅の指定を行う

export default class Template extends React.Component{
    render(){
        return(
            <div>
                <PageList/>
            </div>
        )
    }
}