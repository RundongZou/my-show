import React from "react";
import {Header,Content,Footer} from "./../components/common1"
class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page" id="detail">
            <Header hasRightBtn={"car"} title={"新品上市"} hasback={false}/>
            <Content hasFooter={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default Detail;