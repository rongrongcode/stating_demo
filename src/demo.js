import React, { Component } from 'react'
import './demo.css'

export default class demo extends Component {
    state = {
        newsList: []
    }
    componentDidMount(){
        
        setInterval(()=>{
            const news = '新闻' + (this.state.newsList.length + 1)
            this.setState({
                newsList: [news,...this.state.newsList]
            })
        },1000)
    }

    getSnapshotBeforeUpdate(){
        return this.refs.div.scrollHeight
    }

    componentDidUpdate(a,b,height){
        this.refs.div.scrollTop += this.refs.div.scrollHeight - height
    }
    render() {
        return (
            <div className='news' ref='div'>
                {
                    this.state.newsList.map((n,index)=>{
                        return <div key={index} className='div2'>{n}</div>
                    })
                }  
            </div>
        )
    }
}
