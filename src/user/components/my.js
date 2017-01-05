/**
 作者：lily
 时间：2016-1-3
 描述：
 */
import React from "react";
import {Header,Content,Footer} from "./../../components/common1"
import "./../css/my.css"
import {Link} from 'react-router'
class List extends React.Component{
    constructor(props){
        super(props)
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
        var anonymous = window.localStorage.getItem("user")?JSON.parse(window.localStorage.getItem("user")):{
            "id":this.state.username,
            "password":this.state.password,
            "address":"",
            "tel":""
        }
        if (anonymous) {
            this.state = {
                "anonymous": anonymous
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
                        <img src="" alt=""/>
                    </div>
                    <div className="content-right">
                        <div className="anonymous"><span>昵称 :</span><span className="name">{this.state.anonymous.id}</span></div>
                        <div>余额 : <span className="balance"></span></div>
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
    }
    render(){
        return <div className="page" id="my">
            <Header hasRightBtn={"充值"} title="我的秀"/>
            <Content hasFooter={true}>
                <MyContent/>
            </Content>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default My;