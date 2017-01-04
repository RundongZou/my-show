import React from "react"
import ReactDOM from "react-dom"
import {Header,Content,Footer} from "./../../components/common1"
import "./../css/myOrder.css"
//二级头部模块
class SubHeader extends React.Component{
   constructor(props){
        super(props)
    } 
    render(){
        return <ul className="subHeader">
            <li>全部</li>   
            <li>待付款</li>
            <li>待发货</li>
            <li>待收货</li>
            <li>待评价</li>   
        </ul>
    }
}
class MyOrder extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <div className="page" id="myOrder-page">
             <Header  title="我的订单" hasback={false}/>
             <SubHeader />
             <Content hasFooter={false} hasSubHeader={true}>

             </Content>
        </div>
    }
}
export default MyOrder