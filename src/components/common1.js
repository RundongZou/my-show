import React from "react";
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
    render(){
        return <div className="header">
            <div className="header-btn">{this.props.hasback?<a href={()=>window.history.go(-1)}>{"<"}</a>:""}</div>
            <div className="header-tit">{this.props.title?this.props.title:"首页"}</div>
            <div className="header-btn">
                {this.props.hasRightBtn?this.props.hasRightBtn:""}
            </div>
        </div>
    }
}
Header.defaultProps={
    hasback:true
}
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
                <li key={index} className={this.props.active==index?"active":""}>{ele}</li>
                )
            }
        </ul>
    }
}
Footer.defaultProps={data:["首页","分类","购物车","我的","更多"]}
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