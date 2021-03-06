import React from "react";
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'
import "./commom1.css"
/**
 * 
 * 
 * @class Header
 * @extends {React.Component}
 */
class Header extends React.Component{
    constructor(...args) {
        super(...args);
        this.state={}
    }
    goPage(){
        window.history.go(-1)
    }
    render(){
        return <div className="header">
            <div className="header-btn">{this.props.hasback?<a onClick={()=>this.goPage()}>{"<"}</a>:""}</div>
            <div className="header-tit">{this.props.title?this.props.title:"首页"}</div>
            <div className={this.props.hasRightBtn?"header-btn-r header-btn":"header-btn"} >
                {this.props.hasRightBtn?this.props.hasRightBtn:""}
            </div>
        </div>
    }
}
Header.defaultProps={
    hasback:false
}
const ACTIVE = { color: 'red' };
//fooer
class Footer extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }
    render() {
        var hasFooter={"display":this.props.hasFooter?"block":"none"}
        return <ul className="footer" style={hasFooter}>
            {
                this.props.data.map((ele,index)=>
                <li key={index} className={this.props.active==index?"active":""} ><Link to={ele.name} activeStyle={ACTIVE}><span className={"icon iconfont "+ele.icon}></span>{ele.val}</Link></li>
                )
            }
        </ul>
    }
}
Footer.defaultProps={data:[{"name":"/","val":"首页","icon":"icon-shouye"},{"name":"/list","val":"分类","icon":"icon-fenlei"},{"name":"/carList","val":"购物车","icon":"icon-gouwuche"},{"name":"/my","val":"我的","icon":"icon-my"},{"name":"/more","val":"更多","icon":"icon-gengduo"}]}
//content
class Content extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }
    render() {
        var style={"bottom":this.props.hasFooter?"50px":0,"top":this.props.hasSubHeader?"80px":"50px"}
        return <div className="content" style={style}>
            {this.props.children}
        </div>
    }
}
export {Header,Content,Footer}