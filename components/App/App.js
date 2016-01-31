import React from 'react'

class App extends React.Component{
    getFirstName(){

        return "Joe"
    }

    render(){
        return(
            <div>App Page!! My name is {this.getFirstName()}</div>
        )
    }
}
export default App