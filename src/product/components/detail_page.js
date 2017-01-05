/*
 * @Author: Rundong Zou
 * @Date:   2017-01-04 23:20
 */

// 系统组件
import React, {Component} from "react";
import ReactDOM from "react-dom";

// 引用样式
require("../css/common.css");
require("../css/detail.css");

//class Carousel extends Component {
//	constructor (props) {
//  	super(props);
//  }
//  render () {
//  	return (
//  		
//  	)
//  }
//}

class Detail_page extends Component{
    constructor (props) {
    	super(props);
    	this.state = {
    		product_data: [],
    		goodsID:"",
    		imgsUrl: ""   		
    	}
    	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", {
	    	goodsID: this.props.params.goodsID
	    }, (data) => {
		  	this.setState({
		  		product_data: data,
		  		goodsID: data[0].goodsID,
		  		imgsUrl: data[0].imgsUrl
		  	})
		  	//this.state.goodsID = data.goodsID;
			//console.log(data);
	    })
    }
	
    render () {
    	console.log(this.state.product_data);
    	console.log(this.state.imgsUrl);
    	return (
    		<div id="detail_page">
    			<img src={this.state.imgsUrl} />
    			<div>{this.state.goodsID}</div>
    		</div>
    	)
    }
}
export {Detail_page}