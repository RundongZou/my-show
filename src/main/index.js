import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/index.css"
class Index extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page" id="index">
            <Header  hasback={false}/>
            <Content hasFooter={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default Index;