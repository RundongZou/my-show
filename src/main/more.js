import React from "react";
import {Header,Content,Footer} from "./../components/common1"
class More extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page">
            <Header hasRightBtn={"更多"} hasback={false} title="更多"/>
            <Content hasFooter={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default More;