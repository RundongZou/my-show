/**
 作者：lily
 时间：2016-1-3
 描述：
 */
import "../css/feedback.css"
import React from "react";
import {Header,Content,Footer} from "./../../components/common1"

class Feedbacklist extends React.Component{
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
                <li className="feedback-content">
                    <textarea name="" id="" cols="30" rows="8"></textarea>
                </li>
                <li className="tishi"></li>
                <li  className="to-submit">
                    <input className="submit" type="button" value="保存"  />
                </li>
            </ul>
        )
    }
}


class Feedback extends React.Component{
    render(){
        return (
            <div className="feedback-page" id="feedback">
                <Header title={"修改密码"} />
                <Content>
                    <Feedbacklist/>
                </Content>
            </div>
        )
    }
}
export default Feedback