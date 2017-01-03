import React from "react";
import {Header,Content,Footer} from "./../components/common1"
import "./../css/carList.css"
class CarList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="page">
            <Header hasRightBtn={"car"} title="购物车" hasback={false}/>
            <Content hasFooter={true}/>
            <Footer hasFooter={true}/>
        </div>
    }
}
export default CarList;