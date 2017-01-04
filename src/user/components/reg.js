/**
 作者：lily
 时间：2016-12-15
 描述：
 */

import "./../css/reg.css"
import React from "react";
import {Header,Content,Footer} from "./../../components/common1"

class Reglist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            password1:"",
            username:"",
            regusername:false,
            regpassword:false,
            tip:""
        }
    }
    changeUsername(e){
        this.setState({
            regusername:false
        })
        var reg=new RegExp()
        reg = /^[A-Za-z0-9]{4,16}$/g;
        if(reg.test(e.target.value)){
            this.setState({
                regusername:true
            })
        }
        this.setState({
            username:e.target.value,
            tip:""
        })
    }
    changePassword (e) {
        this.setState({
            regpassword:false
        })
        var reg=new RegExp()
        reg = /^[A-Za-z0-9]{4,16}$/g;
        if(reg.test(e.target.value)){
            this.setState({
                regpassword:true
            })
        }
        this.setState({
            password:e.target.value,
            tip:""
        })
    }
    changePassword1(e){
        this.setState({
            password1:e.target.value,
            tip:""
        })
    }
    toReg(){
        var userData = {"userID":this.state.username,"password":this.state.password}
        if(this.state.regusername && this.state.regpassword && this.state.password==this.state.password1){
            $.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=register",userData,(data)=>{
                if(data == 1){
                   window.location = "/#/my/login"
                }else{
                   this.setState({
                       tip:"用户已存在"
                   })
                }
            })
        }else{
            if(!this.state.regusername){
                this.setState({
                    tip:"用户名输入不合法"
                })
            }
            if(!this.state.regpassword){
                this.setState({
                    tip:"密码输入不合法"
                })
            }
            if(this.state.password1!=this.state.password){
                this.setState({
                    tip:"两次输入密码不一致"
                })
            }
        }
    }
    render(){
        return (
            <ul className="login-list">
                <li>
                    <input onChange={(e)=>this.changeUsername(e)} className="username" type="text" placeholder="账户名称:用户名" />
                </li>
                <li>
                    <input onChange={(e)=>this.changePassword(e)} className="pass passone" type="password" placeholder="登录密码:请输入密码" />
                </li>
                <li>
                    <input onChange={(e)=>this.changePassword1(e)} className="pass passtwo" type="password" placeholder="确认密码:请输入密码" />
                </li>
                <li className="tishi">{this.state.tip}</li>
                <li  className="to-reg">
                    <input className="reg" type="button" value="注册" onClick={()=>this.toReg()} />
                </li>
            </ul>
        )
    }
}


class Reg extends React.Component{
    render(){
        return (
            <div className="reg-page" id="reg-page">
                <Header title={"用户注册"} />
                <Content>
                    <Reglist/>
                </Content>
            </div>
        )
    }
}
export default Reg