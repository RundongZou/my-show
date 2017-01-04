import {Header,Content,Footer} from "./../components/common1"
import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'
import {IndexPage} from "./../page/components/indexPage"
import Pro_list from "./../page/components/pro_list"
import {ListPage} from "./../page/components/listPage"
import {Detail} from "./../page/components/detailPage"

//user
import Login from "./../user/components/login"
import Reg from "./../user/components/Reg"
import My from "./../user/components/my"
//dingdan
import CarList from "./../dingdan/component/carList"
import More from "./../dingdan/component/more"
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
    </Router>

), document.getElementById("root"));