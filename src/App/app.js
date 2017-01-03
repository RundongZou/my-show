import {Header,Content,Footer} from "./../components/common1"
import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink,hashHistory } from 'react-router'
import Index from "./../main/index"
import Classs from "./../main/classs.js"
import CarList from "./../main/carList"
import My from "./../main/my"
import More from "./../main/More"
import "./../css/commom1.css"
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
            <Route path="/" component={Index} />
            <Route path="/classs" component={Classs} />
            <Route path="/carList" component={CarList}/>
            <Route path="/my" component={My}/>
            <Route path="/more" component={More}/>
    </Router>

), document.getElementById("root"));