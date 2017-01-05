import React from "react";
import {Header,Content,Footer} from "./../../components/common1"
import "./../css/carList.css"
import ReactIScroll from "react-iscroll";
import {options} from "./../../config/config"
var userID=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).id:""
class Action{
    
}
//二级头部模块
class SubHeader extends React.Component{
   constructor(props){
        super(props)
    } 
    render(){
        return <div className="subHeader">
            <p>商品数量：{this.props.quality} 应付总额（不含运费）：<span className="price">￥{this.props.totalPrice}</span></p>       
        </div>
    }
}
//购物车列表页面模块
class CarList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "carListData":[],
            "quality":0,
            "totalPrice":0
        }
    }
    changeQua(index,id,num){
        var _this=this;
         var data={
                "userID":userID,
                "goodsID":id,
                "number":num
         }
         clearTimeout(this.Timer);
         this.Timer=setTimeout(function(){
            $.get("http://datainfo.duapp.com/shopdata/updatecar.php",data,(data)=>{
                    console.log(data);
                    _this.getData();
                })
            },600)
    }
    componentWillMount(){
        this.getData()
    }
    getData(){
        $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?userID="+userID+"&callback=?",(data)=>{
            var quality=0;
            var totalPrice=0;
            for(var i=0;i<data.length;i++){
                quality+=parseInt(data[i].number);
                totalPrice+=parseInt(data[i].number)*parseInt(data[i].price)
            }
            if(!data){
                data=[]
            }
            this.setState({
                "carListData":data,
                "quality":quality,
                "totalPrice":totalPrice
            })
            console.log(data)
        })
    }
    toOrder(){
        localStorage.setItem("carListData",JSON.stringify(this.state.carListData));
        window.location.hash="/order/myOrder"
    }
    render(){
        if(userID){
            return <div className="page" id="carList">
                <Header hasRightBtn={<a onClick={()=>{this.toOrder()}}>结算</a>} title="购物车" hasback={false}/>
                <SubHeader quality={this.state.quality} totalPrice={this.state.totalPrice}/>
                <Content hasFooter={true} hasSubHeader={true}>
                    
                    <ReactIScroll iScroll={IScroll} options={options}>
                        <ul className="ShopList">
                            {
                            this.state.carListData.map((ele,index)=>{
                                    return (
                                        <li key={index}>
                                            <div className="imgBox">
                                                <img src={ele.goodsListImg} alt=""  />
                                            </div>
                                            <div className="goodsBox">
                                                <p className="goodsName">{ele.goodsName}</p>
                                                <p className="price">￥{ele.price}</p>
                                                <p className="number">数量:
                                                    <button className="btn sub" onClick={()=>{this.changeQua(index,ele.goodsID,parseInt(ele.number)-1)}}>-</button>
                                                    <input type="text" name=""  value={ele.number} readOnly/>
                                                    <button className="btn add" onClick={()=>{this.changeQua(index,ele.goodsID,parseInt(ele.number)+1)}}>+</button>
                                                </p>
                                                <button className="btn del" onClick={()=>{this.changeQua(index,ele.goodsID,0)}}>x</button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </ReactIScroll>
                </Content>
                <Footer hasFooter={true}/>
            </div>
        }else{
            return <div className="page" id="carList">
                        <Header hasRightBtn={"结算"} title="购物车" hasback={false}/>
                        <SubHeader />
                        <Content hasFooter={true} hasSubHeader={true}>
                            <p className="pleaseLogin">请登录</p>
                        </Content>
                        <Footer hasFooter={true}/>
                </div>
        }
        
    }
}

export default CarList;