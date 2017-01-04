import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/carList.css"
import ReactIScroll from "react-iscroll";
import {options} from "./../config/config"
//二级头部模块
class SubHeader extends React.Component{
   constructor(props){
        super(props)
    } 
    render(){
        return <div className="subHeader">
            <p>商品数量：2 应付总额（不含运费）：<span className="price">￥598</span></p>       
        </div>
    }
}
//这是购物车列表模块
class ShopList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <ul className="ShopList">
            <li>
                <div className="imgBox"></div>
                <div className="goodsBox">
                    <p className=""></p>
                </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    }
}
//购物车列表页面模块
class CarList extends React.Component{
    constructor(props){
        super(props)
    }
    onScroll(){
        console.log("onScroll");
    }
    onScrollEnd(myscroll){
        console.log(myscroll.y)
        console.log("最大的下拉为："+myscroll.maxScrollY)
    }
    render(){
        return <div className="page">
            <Header hasRightBtn={"结算"} title="购物车" hasback={false}/>
            <SubHeader/>
            <Content hasFooter={true} hasSubHeader={true}>
                <ReactIScroll iScroll={IScroll} options={options} 
                                                onScroll={()=>this.onScroll()}
                                                onScrollEnd={(myscroll)=>this.onScrollEnd(myscroll)}>
                    <ShopList />
                </ReactIScroll>
            </Content>
            <Footer hasFooter={true}/>
        </div>
    }
}

export default CarList;