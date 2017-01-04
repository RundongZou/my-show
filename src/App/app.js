import {Header,Content,Footer} from "./../components/common1"
import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'
import {IndexPage} from "./../product/components/indexPage"
import Pro_list from "./../product/components/pro_list"
import {ListPage} from "./../product/components/listPage"
import {Detail} from "./../product/components/detailPage"

//user
import Login from "./../user/components/login"
import Reg from "./../user/components/Reg"
import My from "./../user/components/my"
//order
import CarList from "./../order/component/carList"
import More from "./../order/component/more"
import MyOrder from "./../order/component/myOrder"
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
            <Route path="/" component={IndexPage} />
            <Route path="/classs" component={ListPage} />
            <Route path="/carList" component={CarList}/>
            <Route path="/my" component={My}/>
            <Route path="/more" component={More}/>
            <Route path="/my/login" component={Login}/>
            <Route path="/my/reg" component={Reg}/>
            <Route path="/order/myOrder" component={MyOrder}/>
    </Router>

), document.getElementById("root"));