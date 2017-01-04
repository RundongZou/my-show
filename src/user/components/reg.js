/**
 作者：lily
 时间：2016-12-15
 描述：
 */

import "./../css/reg.css"

import React from "react";

import {Header,Content,Footer} from "./../../components/common1"


class Loginlist extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="login-list">
                <li>
                    <input className="username" type="text" placeholder="账户名称:用户名" />
                </li>
                <li>
                    <input className="pass passone" type="password" placeholder="登录密码:请输入密码" />
                </li>
                <li>
                    <input className="pass passtwo" type="password" placeholder="确认密码:请输入密码" />
                </li>
                <li className="tishi"></li>
                <li  className="to-reg">
                    <input className="reg" type="button" value="注册" />
                </li>
            </ul>
        )
    }
}


class Reg extends React.Component{
    render(){
        return (
            <div className="reg-page" id="reg-page">
                <Header />
                <Content hasFooter={true}>
                    <Loginlist/>
                </Content>

                <Footer hasFooter={true}/>
            </div>
        )
    }
}
export default Reg