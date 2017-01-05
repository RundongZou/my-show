import React from "react"
import ReactDOM from "react-dom"
import {Header,Content,Footer} from "./../../components/common1"
import ReactIScroll from "react-iscroll";
import {options} from "./../../config/config"
import "./../css/myOrder.css"
import OrderList from "./../../components/orderList"
var userID=localStorage["userID"];
var data=JSON.parse(localStorage.getItem("orderData")||"[]")
var orderData={
    "0":[],
    "1":[],
    "2":[],
    "3":[],
    "4":[],
    "totalNum":0,
    "totalPrice":0
}
for(var i=0;i<data.length;i++){
    orderData["0"]=orderData["0"].concat(data[i].orderProductData)
    orderData["totalNum"]+=data[i].totalNum*1;
    orderData["totalPrice"]+=data[i].totalPrice*1
    if(data[i].orderState==1){
        orderData["1"]=orderData["1"].concat(data[i].orderProductData)
    }else if(data[i].orderState==2){
        orderData["2"]=orderData["2"].concat(data[i].orderProductData)
    }else if(data[i].orderState==3){
        orderData["3"]=orderData["3"].concat(data[i].orderProductData)
    }
}
console.log(orderData)
//二级头部模块
// Pending payment待付款  Pay Now 立即付款  cancel order取消订单
class Action{

}
class SubHeader extends React.Component{
   constructor(props){
        super(props);
    } 
    render(){
        return <ul className="subHeader">
            {
                this.props.data.map((ele,index)=>{
                    return <li key={index} className={index==this.props.num?"active":""} onClick={()=>{Action.click(index)}}>{ele}</li>
                })
            }
        </ul>
    }
}
class MyOrder extends React.Component{
    constructor(props){
        super(props);
        var _this=this;
        this.state={
            "data":orderData,
            "num":0
        }
        Action.click=function(index){
            _this.setState({
                "num":index
            })
        }
    }
    cancelOrder(){
        console.log("取消订单");
        localStorage.setItem("orderData","[]");
    }
    render(){
        var data=this.state.data[this.state.num];
        console.log(this.state.num)
        if(data.length<1){
            return <div className="page" id="myOrder-page">
                <Header  title="我的订单" hasback={false}/>
                <SubHeader data={["全部","待付款","待发货","待收货","待评价"]} num={this.state.num} fn={this.fnClick}/>
                <Content hasFooter={false} hasSubHeader={true}>
                    <p className="noneOrder">暂无订单</p>
                </Content>
            </div>
        }else{
            return <div className="page" id="myOrder-page">
                <Header  title="我的订单" hasback={false}/>
                <SubHeader data={["全部","待付款","待发货","待收货","待评价"]} num={this.state.num} />
                <Content hasFooter={false} hasSubHeader={true}>
                    <ReactIScroll iScroll={IScroll} options={options}>
                        <OrderList data={data}>
                            <div className="total">
                                <p>共<span className="active">{this.state.data.totalNum}</span>件 商品实付<span  className="active">￥{this.state.data.totalPrice.toFixed(1)}</span></p>
                            </div>
                            <div className="orderBox">
                                <span>待付款</span><button>立即付款</button><button onClick={()=>this.cancelOrder()}>取消订单</button>
                            </div>
                        </OrderList>
                    </ReactIScroll>   
                </Content>
            </div>
        }
    }
}
export default MyOrder