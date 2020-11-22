import React, {Component} from 'react';

class TimeSelectButton extends Component{
    // give the button a state representing its type
    state = { 
        btnType: this.props.btnTimeType
    }

    // Function to fetch the time from react, then call the Apps (parent) setDisplayedTime function
    // setDisplayedTime is passed as a prop here, named btnSetTime
    setTime = () => {
        fetch("/time/" + this.state.btnType).then(res => res.json()).then(data => {
            this.props.btnSetTime(this.state.btnType, data.time);
          })
    }
    // Render the button
    render(){
        return (
            <button className="timeSelectButton" onClick={this.setTime.bind(this)}> { /*  bind the button to the setTime function */}
                { /*  Set the button text below to the button type as defined in state  */}
                {this.state.btnType}
            </button>
        )
    }
}
export default TimeSelectButton;
