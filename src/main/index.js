import React from "react";
import {Header,Content,Footer} from "./../components/common1"
class Index extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page">
            <Header  hasback={false}/>
            <Content hasFooter={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default Index;