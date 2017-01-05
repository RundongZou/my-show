/*
 * @Author: Rundong Zou
 * @Date:   2017-01-04 23:20
 * @last update time: 2017-01-05 14:40
 * @verson: 1.2
 */

// 系统组件
import React, {Component} from "react";
import ReactDOM from "react-dom";
// 自定义组件
import {Header,Footer} from "./../../components/common1"
import {Content} from "../components/list_common";
import {Tools} from "../tools/tools"

// 引用样式
require("../css/common.css");
require("../css/detail.css");
import '../css/swiper-3.3.1.min.css'

class Detail_page extends Component{
    constructor (props) {
    	super(props);
    	this.state = {
    		banner_list: [],
    		goods_name: "",
    		price: "",
    		buy_number: "",
    		goodsID: this.props.params.goodsID
    	}
    	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", {
	    	goodsID: this.props.params.goodsID
	    }, (data) => {
		  	this.setState({
		  		banner_list: JSON.parse(data[0].imgsUrl),
		  		goods_name: data[0].goodsName,
		  		price: data[0].price,
		  		buy_number: data[0].buynumber
		  	})
	    })
    }
    
    add_to_cart () {
    	// 添加到购物车
    	var user_id = Tools.getUserID();
    	user_id && $.get("http://datainfo.duapp.com/shopdata/updatecar.php", {
    		userID: "zourundong",
    		goodsID: this.state.goodsID,
    		buy_number: 1
    	}, function (data) {
    		if (data) {
    			alert("添加成功")
    		} else {
    			alert("添加失败")
    		}
    	})
    }
    
    to_cart () {
    	Tools.getUserID() && (window.location.hash = "#carList")
    }
	
    render () {
    	//console.log(this.state.product_data);
    	//console.log(this.state.imgsUrl);
    	return (
    		<div className="page" id="detail_page">
    			<Header hasback={true} title="商品详情" rightBtn={<a onClick={() => this.to_cart()}></a>}></Header>
    			<Content>
    				<div className="swiper-container" ref="swiperContainer">
    					<div className="swiper-wrapper">
    						{
    							this.state.banner_list.map((ele, ind) => <div className="swiper-slide" key={ind}><img src={ele} /></div>)
    						}
    					</div>
    				</div>
    				<div className="swiper-pagination" ref="pagination"></div>
    				<div className="pro_info">
					    <li className="pro_name">商品描述: {this.state.goods_name}</li>
						<li className="pro_price">价格: <b className="red">${this.state.price}</b> </li>
						<li className="pro_num">购买人数: {this.state.buy_number}</li>
					</div>
					<div className="detail_footer">
						<div className="look_wrap">查看详情</div>
						<div className="add_wrap"><button className='add_cart' onClick={()=>this.add_to_cart()}>添加到购物车</button></div>
					</div>					
    			</Content>
    			<Footer hasFooter={true} />

    		</div>
    	)
    }
    			
    componentDidMount(){
		this.swiper = new Swiper(this.refs.swiperContainer,{
			pagination:this.refs.pagination,
			slidesPerView:'3',
			loop:true
		})
	}
	componentDidUpdate(){
		this.swiper.update();
		this.swiper.reLoop();
	}
}
export {Detail_page}