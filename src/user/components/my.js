/**
 作者：lily
 时间：2016-1-3
 描述：
 */
import React from "react";
import {Header,Content,Footer} from "./../../components/common1"
import "./../css/my.css"
import Login from "./login"



class List extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <ul className="list">
                {
                    this.props.listData.map((e,i)=>{
                        return(
                            <li key={i}>
                                <a href={e.path}>
                                    <span className="list-left">{e.content}</span>
                                    <span className="list-right">{">"}</span>
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }
}
class MyContent extends React.Component{
    constructor(props) {
        super(props)
        var anonymous = JSON.parse(window.localStorage.getItem("user"))
        if (anonymous) {
            this.state={
                anonymous:anonymous.id,
                userHead:anonymous.userHead
            }
        }else {
            this.state={
                anonymous:"未知",
                userHead:""
            }
        }
    }
    render(){
        var listData = [{"content":"我的订单","path":"#/order/myOrder"},
            {"content":"我的优惠券","path":"#/my"},
            {"content":"浏览记录","path":"#/"},
            {"content":"我的收藏","path":"#/"}]
        return (
            <div className="content-list">
                <div className="content-top">
                    <div className="content-left">
                        <img src={this.state.userHead} alt=""/>
                    </div>
                    <div className="content-right">
                        <p className="anonymous">匿名 : {this.state.anonymous}</p>
                        <p>余额 : <span className="balance">0</span></p>
                    </div>
                </div>
                <List listData={listData}/>
            </div>
        )
    }
}

class My extends React.Component{
    constructor(props){
        super(props)
        this.userID=JSON.parse(localStorage.getItem("user")||"{}").id;
    }
    render(){
        if(this.userID){
            return <div className="page" id="my">
                <Header hasRightBtn={"充值"} title="我的秀"/>
                <Content hasFooter={true}>
                    <MyContent/>
                </Content>
                <Footer hasFooter={true}/>
            </div>
        }else{
            return <Login />
        }
        
    }
}
export default My;