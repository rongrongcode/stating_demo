
import React,{Component,useState,useEffect  } from "react"
import ReactDOM from "react-dom"
import './App.css';


function App(props) {
  const [count, setCount] = React.useState(0);
  useEffect(()=>{
    let timer = setInterval(()=>{
      setCount(count=>count+1)
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[])
  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div className='wrapper'>
      {count}
      <div>
        <button  onClick={unmount}>卸載</button>
      </div>
    </div> 
  );
}

class Welcome extends React.Component {

  state = {
    count:0
  }
  handleClick = () => {
    this.setState({
      count:this.state.count + 1
    })
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({count:this.state.count + 1})
    },1000)
  }
  unmount=()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  componentWillMount(){
    clearInterval(this.timer)
  }
  render() {
    const {count} = this.state
    return (
      <div>
        {count}
        <div>
          <button onClick={this.unmount}>卸載</button>
        </div>
      </div>
    )
  }
}

class Hello extends React.Component {
  myRef = React.createRef()

  show = () => {
    alert(this.myRef.current.value)
  }
  render(){
    return (
      <div>
        <input ref={this.myRef}/> <br/>
        <button onClick={this.show}>click</button>
      </div>
    )
  }
}

function Dome(){
  let myRef = React.useRef()
  function handleShow(){
    alert(myRef.current.value)
  }
  return(
    <div>
      <input ref={myRef}/><br/>
      <button onClic={handleShow}>click</button>
    </div> 
  )
}

const Mycontext = React.createContext()
const {Consumer} = Mycontext
class A extends Component {
  state={
    name:'tom',
    age:19
  }
  render() {
    const {name,age} = this.state
    return (
      <div>
        <h1>我是A組件</h1>
        <h5>{this.state.name}</h5>
        <Mycontext.Provider value={{name,age}}>
          <B />
        </Mycontext.Provider>
      </div>
    )
  }
}
class B extends Component {
  static contextType = Mycontext

  render() {
    return (
      <div>
        <h1>我是B組件</h1>
        <h5>{this.props.name}</h5>
        <C />
      </div>
    )
  }
}
// class C extends Component {
//   static contextType = Mycontext
//   render() {
//     console.log(this.context)
//     return (
//       <div>
//         <h1>我是C組件</h1>
//         <h5>{this.context.name}年齡{this.context.age}</h5>
//       </div>
//     )
//   }
// }
function C(){
  return (
    <div>
      <h1>我是C組件</h1>
      <Consumer>
        {
          value=> <div>name:{value.name}  age{value.age}</div>
        }
      </Consumer>
    </div>
  )
}

export default A;
