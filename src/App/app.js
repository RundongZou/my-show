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
<<<<<<< HEAD
import ChgpassWd from "./../order/component/chgpasswd"
import Feedback from "./../order/component/feedback"
=======
import MyOrder from "./../order/component/myOrder"
>>>>>>> 3ec9d661cc3c36762f391a9f5156fc17916bd403
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
<<<<<<< HEAD
        <Route path="/" component={IndexPage} />
        <Route path="/classs" component={ListPage} />
        <Route path="/carList" component={CarList}/>
        <Route path="/my" component={My}/>
        <Route path="/more" component={More}/>
        <Route path="/my/login" component={Login}/>
        <Route path="/my/reg" component={Reg}/>
        <Route path="/more/chgpasswd" component={ChgpassWd}/>
        <Route path="/more/feedback" component={Feedback}/>
=======
            <Route path="/" component={IndexPage} />
            <Route path="/classs" component={ListPage} />
            <Route path="/carList" component={CarList}/>
            <Route path="/my" component={My}/>
            <Route path="/more" component={More}/>
            <Route path="/my/login" component={Login}/>
            <Route path="/my/reg" component={Reg}/>
            <Route path="/order/myOrder" component={MyOrder}/>
>>>>>>> 3ec9d661cc3c36762f391a9f5156fc17916bd403
    </Router>

), document.getElementById("root"));