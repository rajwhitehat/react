import React from 'react';


class Message extends React.Component{
    constructor(){
  
        super()
        this.state = {
            name: "koli",
            hobby: "drink",
            message: "How are you Kohli Chi"
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you koli chi'
        })
    }
    render(){
        console.log(this.props)
        return (<div><h1>{this.state.message}</h1><button onClick={() => this.changeMessage()}>KoliGTI</button></div>) 
    }
}

export default Message