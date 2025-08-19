import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        error: false
    }
    componentDidCatch(error, info){
        console.log(error, info) 
        this.setState({error: true})
    }
  render(){
    if(this.state.error ){
        return <h2>Somehting went wrong!  </h2>
    }
    return this.props.children  
  }
}

export default ErrorBoundary