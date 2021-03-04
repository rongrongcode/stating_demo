// 该文件适用于创建一个为Count组件服务的reducer，reducer的本质是一个函数对象
// reducer函数会接到两个参数：分别为之前的两个状态prestate和action
import {INCREMENT,DECREMENT} from './constant'
const initState = 0; //初始化状态
function countReducer(preState=initState,action){
    //从action对象中国获取：type,data
    const {type,data} = action;
    console.log(type,data)
    switch( type ){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}

export default countReducer