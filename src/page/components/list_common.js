import React, {Component} from  "react";

// 头部
class Header extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<div className="header">
				<ul className="header_list">
	               <li className="header_btn iconfont icon-zuo"></li>
	               <li className="header_tit">{this.props.tit}</li>
	               <li className="header_btn mar_right15">搜索</li>
	           </ul>
			</div>
		)
	}
}
Header.defaultProps = {
	has_back: true
}

// subheader
class Sub_header extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="sub_header">
				{this.props.children}
			</div>
		)
	}
}

// 主体内容
class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			if_show: false,
			username: "zou",
			pw: "321"		
		}		
	}	
	render() {
		let content_style = {
			"overflowY": this.props.has_iscroll ? "hidden" : "auto"
		}
		let content_class = "content"
							+ (this.props.has_footer ? " has_footer" : "")
							+ (this.props.has_sub_header ? " has_sub_header" : "");
							
		return (
            <div className={content_class} style={content_style}>
            	{
            		this.props.has_iscroll ? 
            			<div className="scroll_wrap" ref="scrollWrap">
            				<div className="scroller">{this.props.children}</div>
            			</div> : this.props.children
            	}           	       	
            </div>		
		)
	}
	componentDidMount () {
		//组件渲染完成后， 获取scroll_wrap, 创建iscroll
		//如果需要iscroll再创建
		this.props.has_scroll && (this.my_scroll = new IScroll(this.refs.scrollWrap));
	}
	componentDidUpdate () {
		//组件更新的时候，也更新iscroll
		this.props.has_scroll && this.my_scroll.refresh();
	}
}

// 底部
class Footer extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (			
			<div className="footer">
            	<ul className="footer_list">
            		<li><p className="icon iconfont icon-shouye"></p><p>首页</p></li>
            		<li><p className="icon iconfont icon-fenlei"></p><p>分类</p></li>
            		<li><p className="icon iconfont icon-gouwuche"></p><p>购物车</p></li>
            		<li><p className="icon iconfont icon-my myShow"></p><p>我的</p></li>
            		<li><p className="icon iconfont icon-gengduo"></p><p>更多</p></li>
            	</ul>
			</div>
		)
	}
}

// loading
class Loading extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div id="loading">
				<div className="loading_img">
					<img src="../img/loading4.gif" alt="" />
				</div>
			</div>
		)
	}
}


export { Header, Sub_header, Content, Footer, Loading }
