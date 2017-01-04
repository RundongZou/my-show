import React, {Component} from "react";

/*写组件的时候，尽量把组件名写完整，描述清晰*/
class Pro_list extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<ul className="pro_list">{
    			this.props.product_data.map((ele, ind) => (
    				<li key={ind} className="pro_item"> 
                        <a href="###" className="pic"><img src={ele.goodsListImg} alt="" /></a> 
                        <p className="pro_name">{ele.goodsName}</p>
                        <p className="price"><em>{ele.price}</em> <del>￥668</del></p> 
                    </li>
    			))	            			
    		}	            			
    	    </ul>
		)
	}
}

Pro_list.defaultProps = {
	product_data: []
}

export default Pro_list;
