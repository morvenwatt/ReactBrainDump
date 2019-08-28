import React from 'react';

//function occurs every second. 
const milliseconds = 1000;
setInterval (
  function callback() {

  },
  milliseconds
)

class TheDate extends React.Component {
  constructor (props){
    super (props)
    this.state = { datetime: new Date () };
    }
    //setting state to be equal to the Date/time - existing method (Date)

    componentDidMount(){
      this.interval = setInterval(() => {
        this.setState ({
          datetime: new Date ()
        })
    }, 1000) 
  }
  //^^^ Did the DOM change? Yes, because the seconds changed, so 
  //let the state reflect that by calling the interval function (which occurs every second)
  //and setting the value of the this.interval to be the new datetime. 
  //Why do we need this? In order for the second change to be reflected, we must let the DOM
  //know that 1. The seconds are happening (calling setInterval function), and 2. let the state
  //know that the datetime needs updated. SO nested inside this.interval, the setInterval function runs
  //it's callback, and then calls its own function (set state in this case), which updates state. 

  //Did the DOM change? Yes and we want to clear the old interval out - 
  //Is clear Interval a set method?
    componentWillUnmount(){
      clearInterval(this.interval)
    }
    render() {
    return (
      //converts the date to a readable string (set method)
        <div>
            <p>{this.state.datetime.toLocaleString()}</p>
    </div>
    )
  }
}

export default TheDate