/**
 * Created by Administrator on 2017/1/3.
 */

import "./../css/login.css"
import React from "react";

import {Header,Content,Footer} from "./../../components/common1"
class Tip extends React.Component{
    render(){
        return (
            <div className="loading">登录成功</div>
        )
    }
}
class Loginlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ShowPassword:false,
            password:"",
            username:"",
            rememberPassword:false,
            tip:""
        }

    }
    changeShowPassword () {
        var ShowPassword=!this.state.ShowPassword
        this.setState({
            ShowPassword:ShowPassword
        })
    }
    changeUsername(e) {
        this.setState({
            username:e.target.value,
            tip:""
        })

    }
    changePassword (e) {
        this.setState({
            password:e.target.value,
            tip:""
        })
    }
    rememberPassword(){
        var rememberPassword = !this.state.rememberPassword
        this.setState({
            rememberPassword:rememberPassword
        })
    }
    toLogin(){
        var userData = {"userID":this.state.username,"password":this.state.password}
        $.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login",userData,(data)=>{
            if(data == 2){
                this.setState({
                    tip:"信息输入有误"
                })
            }else if(data == 0){
                this.setState({
                    tip:"用户不存在"
                })
            }else{
                if(this.state.rememberPassword){
                    window.localStorage.setItem("userID",this.state.username+"&&"+this.state.password)
                }else {
                    window.localStorage.setItem("userID",this.state.username)
                }
                window.location = "/"
            }
        })
    }
    toReg(){
        window.location = "/#/my/reg"
    }
    render(){
        return (
            <ul className="login-list">
                <li>
                    <input className="username" onChange={(e)=>this.changeUsername(e)} type="text" placeholder="用户名" value={this.state.username}/>
                </li>
                <li>
                    <input  className="password" onChange={(e)=>this.changePassword(e)} type={this.state.ShowPassword?"text":"password"} placeholder="密码"  />
                </li>
                <li className="check-item" >
                    <label>
                        <input type="checkbox" onClick={()=>this.changeShowPassword()} />
                        <span>显示密码</span>
                    </label>
                    <a className="forget">忘记密码?</a>
                </li>
                <li className="check-item">
                    <label>
                        <input type="checkbox" onClick={()=>this.rememberPassword()}/>
                        <span>记住密码</span>
                    </label>

                </li>
                <li className="tishi">{this.state.tip}</li>
                <li className="to">
                    <input className="login-btn" type="button" value="登录"  onClick={()=>this.toLogin()}/>
                </li>
                <li  className="to">
                    <input type="button" value="注册" onClick={()=>this.toReg()}/>
                </li>
            </ul>
        )
    }
}
class Login extends React.Component{
    render(){
        return (
            <div className="login-page" id="login-page">
                <Header title={"开心摇一摇用户登录"} />
                <Content hasFooter={true}>
                    <Loginlist/>
                </Content>
                <Footer hasFooter={true}/>
                <Tip/>
            </div>
        )
    }
}
export default Login