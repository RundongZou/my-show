import {Header,Content,Footer} from "./../components/common1"
import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'

// 自定义组件
// product
import {Index_page} from "./../product/components/index_page"
import {List_page} from "./../product/components/list_page"
import {Detail_page} from "./../product/components/detail_page"
import {Pro_list} from "./../product/components/pro_list"

//user
import Login from "./../user/components/login"
import Reg from "./../user/components/Reg"
import My from "./../user/components/my"
//order
import CarList from "./../order/component/carList"
import More from "./../order/component/more"
import MyOrder from "./../order/component/myOrder"
import ChgpassWd from "./../order/component/chgpasswd"
import Feedback from "./../order/component/feedback"
class Page extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page">
//          <Header hasRightBtn={"搜索"}/>
//          <Content hasFooter={true}/>
//          <Footer hasFooter={true}/>
        </div>
    }
}
ReactDOM.render((
    <Router history={hashHistory}>
            <Route path="/" component={Index_page} />
            <Route path="/list" component={List_page} />
            <Route path="/detail(/:goodsID)" component={Detail_page} />
            <Route path="/carList" component={CarList}/>
            <Route path="/my" component={My}/>
            <Route path="/more" component={More}/>
            <Route path="/my/login" component={Login}/>
            <Route path="/my/reg" component={Reg}/>
            <Route path="/my/chgpassWd" component={ChgpassWd}/>
            <Route path="/my/feedback" component={Feedback}/>
            <Route path="/order/myOrder" component={MyOrder}/>
    </Router>

), document.getElementById("root"));