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
            content:"",
            password:"",
            password1:"",
            username:"",
            tip:""
        }
    }
    changeContent(e){
        this.setState({
            content:e.target.value
        })
        console.log(this.state.content)
    }
    save(){
        this.setState({
            content:"",
            tip:"保存成功"
        })
    }
    render(){
        return (
            <ul className="feedback-list">
                <li className="feedback-content">
                    <textarea name="" id="" cols="50" rows="12" value={this.props.content} onChange={(e)=>this.changeContent(e)}></textarea>
                </li>
                <li className="tishi">{this.state.tip}</li>
                <li  className="to-submit">
                    <input className="submit" type="button" value="保存" onClick={()=>this.save()} />
                </li>
            </ul>
        )
    }
}


class Feedback extends React.Component{
    render(){
        return (
            <div className="feedback-page" id="feedback">
                <Header title={"意见反馈"} />
                <Content>
                    <Feedbacklist/>
                </Content>
            </div>
        )
    }
}
export default Feedback