import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    }

componentWillUnmount() {
    clearTimeout(this.timeout)
}

triggerPulledHandler = () => {
    console.log('trigger pulled')
    this.setState({
        spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
        const randomChamber = Math.ceil(Math.random() * 8)

        this.setState({
            chamber: randomChamber,
            spinningTheChamber: false,
        })
    }, 2000)
}
renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
        return 'Spinning the chamber and pulling the trigger...'
    } else if (chamber === bulletInChamber) {
        return 'Bang!'
    } else {
        return 'Today\'s your lucky day'
    }
}

render(){
    const style = {
        width: '100px',
        border: '1px solid black',
        margin: '5px'
    }
    return (
        <div>
            <p>So, are you feeling lucky punk?</p>
            <p>{this.renderDisplay()}</p>
            <button style= {style} onClick={this.triggerPulledHandler}>Pull The Trigger...</button>
        </div>
    )
    }
}

export default RouletteGun;