/**
 作者：lily
 时间：2016-1-3
 描述：
 */
import React from "react";
import {Header,Content,Footer} from "./../../components/common1"
import "./../css/more.css"
class Morelist extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul className="more-list">
                {
                    this.props.moreList.map((e,i)=>{
                        return (
                            <li className="list" key={i}>
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
class More extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var moreList =[{"content":"修改密码","path":"#/my/chgpassWd"},
            {"content":"用户反馈","path":"#/my/feedback"},
            {"content":"关于","path":"/"}]
        return <div className="page" id="more">
            <Header hasback={false} title="更多"/>
            <Content hasFooter={true}>
                <Morelist moreList={moreList} />
            </Content>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default More;