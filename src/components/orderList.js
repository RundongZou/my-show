import React from "react"
import ReactDOM from "react-dom"
import "./orderList.css"
class OrderList extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <div className="orderList">
            {
                this.props.data.map((ele,index)=>{
                    return (
                        <div className="iTem" key={index}>
                            <div className="imgBox">
                                <img src={ele.goodsListImg} alt="" />
                            </div>
                            <div className="Name">
                                {ele.goodsName}
                            </div>
                            <div className="goodsInf">
                                <p className="goodsPrice">￥{ele.price}</p>
                                <p>*{ele.number}</p>
                            </div>
                        </div>
                    )
                })
            }
            {this.props.children}
        </div>  
    }
}
export default OrderList