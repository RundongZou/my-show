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
        var username = JSON.parse(window.localStorage.getItem("user"))
        this.state={
            username:username.id,
            oldpassword:username.password||1212,
            password:"",
            newpassword1:"",
            regpassword:false,
            newpassword2:"",
            tip:""
        }
    }
    changeName(e){
        this.setState({
            password:e.target.value,
        })
    }
    changePass1(e){
        var reg=new RegExp()
        reg = /^[A-Za-z0-9]{4,16}$/g;
        if(reg.test(e.target.value)){
            this.setState({
                regpassword:true
            })
        }
        this.setState({
            newpassword1:e.target.value
        })
    }
    changePass2(e){
        this.setState({
            newpassword2:e.target.value,
        })
    }
    save(){
        if(this.state.password!=this.state.oldpassword){
            this.setState({
                regpassword:false,
                tip:"您的原始密码输入有误"
            })
        }
        if(!this.state.regpassword){
            this.setState({
                regpassword:false,
                tip:"您的密码输入不合法"
            })
        }else if(this.state.newpassword1!=this.state.newpassword2){
            this.setState({
                regpassword:false,
                tip:"你两次输入的密码不一致"
            })
        }

        if(this.state.regpassword&&this.state.password==this.state.oldpassword&&this.state.newpassword1==this.state.newpassword2){
            this.setState({
                regpassword:false,
                tip:"修改成功"
            })
        }
    }
    render(){
        return (
            <ul className="feedback-list">
                <li>
                    <input className="username" type="text" placeholder="请输入原密码" onChange={(e)=>this.changeName(e)} value={this.props.password}/>
                </li>
                <li>
                    <input className="pass passone" type="password" placeholder="请输入新密码" onChange={(e)=>this.changePass1(e)} value={this.props.newpassword1}/>
                </li>
                <li>
                    <input className="pass passtwo" type="password" placeholder="请再次输入新密码" onChange={(e)=>this.changePass2(e)} value={this.props.newpassword2}/>
                </li>
                <li className="tishi">{this.state.tip}</li>
                <li  className="to-save">
                    <input className="save" type="button" value="保存" onClick={()=>this.save()} />
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