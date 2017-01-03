import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/carList.css"
class SubHeader extends React.Component{
   constructor(props){
        super(props)
    } 
    render(){
        return <div className="subHeader">
            
        </div>
    }
}

class CarList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page">
            <Header hasRightBtn={"结算"} title="购物车" hasback={false}/>
            <SubHeader/>
            <Content hasFooter={true} hasSubHeader={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default CarList;