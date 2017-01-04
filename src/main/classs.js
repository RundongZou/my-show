import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/classs.css"
class Classs extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page" id="classs">
            <Header hasRightBtn={"car"} title={"新品上市"} hasback={false}/>
            <Content hasFooter={true}>
            </Content>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default Classs;