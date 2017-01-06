import React from "react";
import "./../css/confirm.css"
import ReactIScroll from "react-iscroll";
import {options} from "./../../config/config"
import OrderList from "./../../components/orderList"
import {Header,Content} from "./../../components/common1";


//confirm-page
class Comfirm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "data":localStorage.getItem("carListData")?JSON.parse(localStorage.getItem("carListData")):[],
            "user":JSON.parse(localStorage.getItem("user")),
            "invoices":false
        }
    }
    hasInvoices(){
        this.setState({
            "invoices":!this.state.invoices
        })
    }
    toOrder(){
        var data=this.state.data;
        var orderData={
            orderID:new Date().getTime(),
            orderState:1,
            totalNum:data.totalNum,
            totalPrice:data.totalPrice,
            orderProductData:data.data
        }
        var arrData=JSON.parse(localStorage.getItem("orderData")||"[]");
        arrData.push(orderData);
        localStorage.setItem("orderData",JSON.stringify(arrData));
        window.location.hash="/order/myOrder"
    }
    render(){
        return <div className="page" id="confirm-page">
            <Header title="确认订单"/>
            <Content hasFooter={true}>
                <ReactIScroll iScroll={IScroll} options={options}>
                    <div className="scrollBox">
                        <div className="userinfo">
                            <div>
                                {this.state.user.id}&nbsp;电话：{this.state.user.tel}
                            </div>
                            <div>
                                {this.state.user.address}
                            </div>
                        </div>
                        <OrderList data={this.state.data.data}>
                            <div className="priceInfo">
                                <p>运费：￥0</p>
                                <p>实付款（含运费）：0.04</p>
                                <input type="text" name="" value=""  placeholder="信息备注"/>
                            </div>
                        </OrderList>
                        <div className="invoices">
                            <p>是否使用发票</p><div className="button" onClick={()=>this.hasInvoices()}><div className={this.state.invoices?"checked":""} ></div></div>
                        </div>
                    </div>
                </ReactIScroll>
            </Content>
            <div id="footer">
                <p className="footerInfo">
                    共{this.state.data.totalNum}件，总金额￥{this.state.data.totalPrice}
                </p>
                <p>
                    <button onClick={()=>this.toOrder()}>提交订单</button>
                </p>
            </div>
        </div>
    }
}
export default Comfirm