/**
 * Created by Administrator on 2017/1/3.
 */

import "./../css/login.css"
import React from "react";

import {Header,Content,Footer} from "./../../components/common1"

class Loginlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ShowPassword:false,
            password:"",
            username:"",
            regusername:false,
            regpassword:false,
            tip:"2323"
        }

    }
    changeShowPassword () {
        var ShowPassword=!this.state.ShowPassword
        console.log(ShowPassword)
        this.setState({
            ShowPassword:ShowPassword
        })

    }
    RegUsername(e) {
        var reg=new RegExp()
        reg = /^[A-Za-z0-9]{4,16}$/g;
        if(reg.test(e.target.value)){
            this.setState({
                regusername:true
            })
        }
        this.setState({
            username:e.target.value
        })

    }
    RegPassword (e) {
        console.log(e.target.value)
        var reg=new RegExp()
        reg = /^[A-Za-z0-9]{4,16}$/g;
        if(reg.test(e.target.value)){
            this.setState({
                regpassword:true
            })
        }
        this.setState({
            password:e.target.value
        })
    }
    toLogin(){
        var userData = {"userID":this.state.username,"password":this.state.password}
        console.log(this.state.username+"----username")
        console.log(this.state.regusername+"----regusername")
        console.log(this.state.password+"----password")
        console.log(this.state.regpassword+"----regpassword")
        if(this.state.regusername && this.state.regpassword){
            $.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login",userData,(data)=>{
                console.log(data)
                if(data == 2){

                    console.log("密码输入有误")
                }else if(data == 0){

                    console.log("用户不存在")
                }else{
                    window.localStorage.setItem("userID",this.state.username)
                    console.log("登录成功")
                }
            })
        }else{
            if(!this.state.regusername){
                console.log("用户名输入有误")
            }
            if(!this.state.regpassword){
                console.log("密码输入不合法")
            }
        }
    }
    render(){
        return (
            <ul className="login-list">
                <li>
                    <input className="username" onChange={(e)=>this.RegUsername(e)} type="text" placeholder="用户名" value={this.state.username}/>
                </li>
                <li>
                    <input  className="password" onChange={(e)=>this.RegPassword(e)} type={this.state.ShowPassword?"text":"password"} placeholder="密码"  />
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
                        <input type="checkbox" />
                        <span>记住密码</span>
                    </label>

                </li>
                <li className="tishi">{this.state.tip}</li>
                <li className="to">
                    <input className="login-btn" type="button" value="登录"  onClick={()=>this.toLogin()}/>
                </li>
                <li  className="to">
                    <input type="button" value="注册" />

                </li>
            </ul>
        )
    }
}


class Login extends React.Component{
    render(){
        return (
            <div className="login-page" id="login-page">
                <Header />
                <Content hasFooter={true}>
                    <Loginlist/>
                </Content>

                <Footer hasFooter={true}/>
            </div>
        )
    }
}
export default Login