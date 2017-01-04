import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/my.css"
class My extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page" id="my">
            <Header hasRightBtn={"充值"} title="我的秀"/>
            <Content hasFooter={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default My;