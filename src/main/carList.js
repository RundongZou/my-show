import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/carList.css"

class SubHeader extends React.Component{
   constructor(props){
        super(props)
    } 
    render(){
        return <div className="subHeader">
            <p>商品数量：2 应付总额（不含运费）：<span className="price">￥598</span></p>       
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
            <Content hasFooter={true} hasSubHeader={true}>


            </Content>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default CarList;