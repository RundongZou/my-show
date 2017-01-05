import React from "react"
import ReactDOM from "react-dom"
import {Header,Content,Footer} from "./../../components/common1"
import ReactIScroll from "react-iscroll";
import {options} from "./../../config/config"
import "./../css/myOrder.css"
import OrderList from "./../../components/orderList"
var userID=localStorage["userID"];
var order=localStorage["order"]?JSON.parse(localStorage["order"]):[];
//二级头部模块
// Pending payment待付款  Pay Now 立即付款  cancel order取消订单
class Action{

}
class SubHeader extends React.Component{
   constructor(props){
        super(props);
        
    } 
    render(){
        console.log(this.props)
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
        var totalNum=0;
        var totalPrice=0
        for(var i=0;i<order.length;i++){
            totalNum+=order[i].number*1;
            totalPrice+=order[i].price*1;
        }
        var _this=this;
        console.log(totalNum)
        this.state={
            "num":0,
            "data":order?order:[],
            "totalNum":totalNum,
            "totalPrice":totalPrice
        }
        Action.click=function(index){
            _this.setState({
                "num":index
            })
        }
    }
    render(){
        if(order.length<1){
            return <div className="page" id="myOrder-page">
                <Header  title="我的订单" hasback={false}/>
                <SubHeader data={["全部","待付款","待发货","待收货","待评价"]} num={this.state.num} fn={this.fnClick}/>
                <Content hasFooter={false} hasSubHeader={true}>
                    <p className="noneOrder">暂无订单</p>
                </Content>
            </div>
        }else{
            console.log(this.state)
            return <div className="page" id="myOrder-page">
                <Header  title="我的订单" hasback={false}/>
                <SubHeader data={["全部","待付款","待发货","待收货","待评价"]} num={this.state.num} />
                <Content hasFooter={false} hasSubHeader={true}>
                    <ReactIScroll iScroll={IScroll} options={options}>
                        <OrderList data={order}>
                            <div className="total">
                                <p>共<span className="active">{this.state.totalNum}</span>件 商品实付<span  className="active">￥{this.state.totalPrice.toFixed(1)}</span></p>
                            </div>
                            <div className="orderBox">
                                <span>待付款</span><button>立即付款</button><button>取消订单</button>
                            </div>
                        </OrderList>
                    </ReactIScroll>   
                </Content>
            </div>
        }
    }
}
export default MyOrder