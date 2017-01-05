/**
 作者：lily
 时间：2016-1-3
 描述：
 */
import "./../css/chgpasswd.css"
import React from "react";
import {Header,Content,Footer} from "./../../components/common1"

class Chgpasswdlist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            password1:"",
            username:"",
        }
    }

    render(){
        return (
            <ul className="feedback-list">
                <li>
                    <input className="username" type="text" placeholder="请输入原密码" />
                </li>
                <li>
                    <input className="pass passone" type="password" placeholder="请输入新密码" />
                </li>
                <li>
                    <input className="pass passtwo" type="password" placeholder="请再次输入新密码" />
                </li>
                <li className="tishi"></li>
                <li  className="to-save">
                    <input className="save" type="button" value="保存"  />
                </li>
            </ul>
        )
    }
}


class ChgpassWd extends React.Component{
    render(){
        return (
            <div className="chgpasswd-page" id="chgpasswd">
                <Header title={"修改密码"} />
                <Content>
                    <Chgpasswdlist/>
                </Content>
            </div>
        )
    }
}
export default ChgpassWd