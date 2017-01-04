import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/more.css"
class More extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page" id="more">
            <Header hasRightBtn={"更多"} hasback={false} title="更多"/>
            <Content hasFooter={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default More;