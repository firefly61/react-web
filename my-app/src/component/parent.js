import React from 'react';
import PropTypes from "prop-types";
// import ReactDOM from "react-dom";
import Sub from "./sub";

export default class Parent extends React.Component{
    // 父组件声明自己支持 context
    static childContextTypes = {
        color:PropTypes.string,
        callback:PropTypes.func,
    }

    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext(){
        return{
            color:"red",
            callback:this.callback.bind(this)
        }
    }

    callback(msg){
        console.log(msg)
    }

    render(){
        return(
            <div>
                <Sub></Sub>
            </div>
        );
    }
} 

// ReactDOM.render(
//     <Parent />,
//     document.getElementById('root')
// );

