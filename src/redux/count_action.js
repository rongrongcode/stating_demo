//为count组件生成action对象
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})
console.log(INCREMENT)
console.log(typeof INCREMENT)
export const createDecrementAction = data => ({type:DECREMENT,data})