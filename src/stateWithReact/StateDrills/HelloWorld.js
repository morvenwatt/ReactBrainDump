import React from 'react';

class HelloWorld extends React.Component {
    constructor (props) {
      super (props) 
      this.state = {
        who: 'World'
      }
    }
   
    render (){
        const style = {
            width: '100px',
            border: '1px solid magenta',
            margin: '5px'
        }
      return (
      <div>
          <p>Hello {this.state.who}</p>
          <button style={style} onClick={()=> this.setState({who: 'World'})}>World</button>
          <button style={style} onClick={()=> this.setState({who: 'Friend'})}>Friend</button>
          <button style={style} onClick={()=> this.setState({who: 'React'})}>React</button>
        </div>
      )
    }
  }
  
export default HelloWorld;