import React from "react"
import ReactDOM from "react-dom"
import {Header,Content,Footer} from "./../../components/common1"
import ReactIScroll from "react-iscroll";
import {options} from "./../../config/config"
import "./../css/myOrder.css"
import OrderList from "./../../components/orderList"

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
class OrderC extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
            console.log(this.props.num);
            if(this.props.num==1){
                return <div>
                    <div className="total">
                        <p>共<span className="active">{this.props.data.totalNum}</span>件 商品实付<span  className="active">￥{this.props.data.totalPrice.toFixed(1)}</span></p>
                    </div>
                    <div className="orderBox">
                        <span>待付款</span>
                        <button onClick={()=>Action.payNow(this.props.num)}>立即付款</button>
                        <button onClick={()=>Action.cancelOrder(this.props.num)}>取消订单</button>
                    </div>
                </div>
            }else{
                 return <div></div>
            }
    }
}
class MyOrder extends React.Component{
    constructor(props){
        super(props);
        var userID=localStorage["userID"];
        this.data=JSON.parse(localStorage.getItem("orderData")||"[]")
        this.carListData=JSON.parse(localStorage.getItem("carListData")||"[]");
        this.orderData={
            "0":[],
            "1":[],
            "2":[],
            "3":[],
            "4":[],
            "totalNum":0,
            "totalPrice":0
        }
        for(var i=0;i<this.data.length;i++){
            this.orderData["0"]=this.orderData["0"].concat(this.data[i].orderProductData)
            if(this.data[i].orderState==1){
                this.orderData["1"]=this.orderData["1"].concat(this.data[i].orderProductData)
                this.orderData["totalNum"]+=this.data[i].totalNum*1;
                this.orderData["totalPrice"]+=this.data[i].totalPrice*1
            }else if(this.data[i].orderState==2){
                this.orderData["2"]=this.orderData["2"].concat(this.data[i].orderProductData)
            }else if(this.data[i].orderState==3){
                this.orderData["3"]=this.orderData["3"].concat(this.data[i].orderProductData)
            }else if(this.data[i].orderState==4){
                this.orderData["4"]=this.orderData["4"].concat(this.data[i].orderProductData)
            }
        }
        var _this=this;
        this.state={
            "data":this.orderData,
            "num":0
        }
        Action.click=function(index){
            _this.setState({
                "num":index
            })
        }
        Action.cancelOrder=(num)=>{
            localStorage.setItem("orderData","[]");
            this.orderData[num]=[];
            this.setState({
                "data":this.orderData
            })
        }
        Action.payNow=(num)=>{
            console.log(num);
            var arr=this.orderData[1];
            this.orderData[1]=[];
            this.orderData[2]=arr;
            for(var i=0;i<this.data.length;i++){
                this.data[i].orderState=2;
            }
            localStorage.setItem("orderData",JSON.stringify(this.data))
            this.setState({
                "data":this.orderData
            })
        }
    }
    render(){
        var data=this.state.data[this.state.num];
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
                        <div>
                            <OrderList data={data}>
                                <OrderC data={this.orderData} num={this.state.num} />
                            </OrderList>
                            <OrderList data={this.carListData.data}/>
                        </div>
                    </ReactIScroll>   
                </Content>
            </div>
        }
    }
}
export default MyOrder