import React from 'react'

class Hello extends React.Component{
    render(){
    //     return <h1>Hello Sukh</h1>
    return React.createElement('div', null, 'chintu', React.createElement('p', null, 'GTI'))
     }

    
}

export default Hello