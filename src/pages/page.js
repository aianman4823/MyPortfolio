import React from 'react';
import Template from '../templates/template';


// ここでは実際にこれまでのコンポーネントに実際のテキストと画像を流し込む作業をする
// また、このページ特有のOrganismsのmarginなどもここで設定する

export default class Page extends React.Component{
    render(){
        return(
            <div>
                <Template />
            </div>
        )
    }
}