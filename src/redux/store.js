// 该文件专门暴露store对象，整个应用只有一个store对象
import {createStore} from 'redux'
import conutReducer from './count_reducer'

const store = createStore(conutReducer)
// console.log(store.getState)
export default store