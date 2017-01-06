//系统组件
import React, {Component} from  "react";
import ReactDOM from "react-dom";
import ReactIScroll from "react-iscroll";
import {Header,Footer} from "./../../components/common1"
//自定义组件
import {Content,Sub_header, Loading } from "./../components/list_common";
import Pro_list from "./../components/pro_list";
import {scroll_options} from "./../config/config";
// 引入样式
require("../css/common.css");
require("../css/index.css");

//console.log(ReactIScroll)

// banner
class Banner extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className="banner">{this.props.children}</div>
		)
	}		
}

// 最外面的主体
class Index_page extends Component {
	constructor (props) {
		super(props);
		this.state = {
			class_data: [],
			product_data: [],
			banner_list: []
		}
		
		// 设置默认的数据请求选项
		this.classID = undefined;
		this.linenumber = 6;
		this.pageCode = 0;
		this.refresh = false;
		
		// 显示蒙层
        $("#loading").show();
		
		// subheader获取数据
		$.get("http://datainfo.duapp.com/shopdata/getclass.php", (data) => {
			// 容错
			if (typeof data === "string") {
				data = JSON.parse(data);
			}
			//console.log(data);
			this.setState({
				class_data: data
			})
		}, "json")
		// 请求商品数据
		this.get_product_data(this.pageCode)	
		
		// banner获取数据
		$.getJSON("http://datainfo.duapp.com/shopdata/getBanner.php?callback=?", (data) => {
			let a= JSON.parse(data[1].goodsBenUrl)
			console.log(data.length);
			var arr = [];
			for (let i = 0; i < data.length; i++) {
				let a= JSON.parse(data[i].goodsBenUrl)
				arr.push(a[0])
			}
			//console.log(arr);
			this.setState({
				banner_list: arr
			})
		})
		
		$.getJSON("http://datainfo.duapp.com/shopdata/getuser.php?callback=?", {
			userID: "zourundong"
		}, (data) => {
			console.log(data);
		})
	
	}
	
	change_classID (id) {
		this.classID = id;
		this.pageCode = 0; // 重置页面
		this.get_product_data();
	}
	
	get_product_data () {
			// 里面的商品列表  获取数据
			$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", {
				"classID": this.classID,
				"linenumber": this.linenumber,
				"pageCode": this.pageCode
			}, (data) => {
				// 刷新需要覆盖之前的数据， 加载需要和之前的数据合并
				if (data) {
					console.log(data);
					this.setState({
						product_data: this.pageCode === 0 ? data : this.state.product_data.concat(data) 					
					});
				}	
				//$("#loading").fadeOut();
			})
		}
	
		onScrollEnd (myScroll) {
			//myScroll 是ReactIScroll 提供的操作滚动条的对象
			console.log("onScrollEnd");
			console.log(myScroll.y);
			console.log(myScroll.maxScrollY);
			if (this.refresh) {
				this.pageCode = 0;
				this.get_product_data();
				this.refresh = false;
			} else if (myScroll.y - myScroll.maxScrollY < 40) {
				console.log("加载更多");
				this.pageCode ++;
				this.get_product_data();
			}	
			window.scrollTo(0, 0)
		}
	
		onScroll (myScroll) {
			console.log("scroll");
			if (myScroll.y > 20) {
				console.log("刷新");
				this.refresh = true;
			}
		}

	render () {
		return (
			<div className="page" id="list_page">
				<Header title="走秀网" hasback={false} />	
				<Sub_header>
					<input className="search" type="text" placeholder="寂寞空虚的骚男" />
				</Sub_header>
				<Banner>
					<div className="swiper-container" ref="swiperContainer">
    					<div className="swiper-wrapper">
    						{
    							this.state.banner_list.map((ele, ind) => <div className="swiper-slide" key={ind}><img src={ele} /></div>)
    						}
    					</div>
    					<div className="swiper-pagination" ref="pagination"></div>
    				</div>  				
				</Banner>
			
				<Footer hasFooter={true}/>
			</div>
		)	
		
	}
	componentDidMount(){
			this.swiper = new Swiper(this.refs.swiperContainer,{
				pagination:this.refs.pagination,
	       		autoplay: 2000,
	       		autoplayDisableOnInteraction: false,
				effect: 'coverflow',
				grabCursor: true,
		        centeredSlides: true,
		        slidesPerView: 'auto',
		        coverflow: {
		            rotate: 60,
		            stretch: 0,
		            depth: 300,
		            modifier: 1,
		            slideShadows : true
		        }
			})

		}
		componentDidUpdate(){
			this.swiper.update();
			this.swiper.reLoop();
		}
}

$("body document").append($("#loading"));


export {Index_page};
