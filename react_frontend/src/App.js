import React,{Component} from 'react';
import TimeSelectButton from './TimeSelectButton.js' //import the button class

class App extends Component{ // our main app
  state = {
    timeType:"____", //state to hold selected time type
    timeValue:"_____" //state to hold time val from flask
  }

  // Function to update the state of the App, will cause re-render
  setDisplayedTime = (timeType, timeVal) =>{
    this.setState({timeType: timeType})
    this.setState({timeValue: timeVal})
  }

  // Stuff that will be rendered by the app
  render(){
    return (
      // Need a containter (div) to wrap all our buttons
      <div className="App">
        {/*  Create 3 buttons, each passed a type, and the function to set the apps state   */}
        <TimeSelectButton btnTimeType={"day"} btnSetTime={this.setDisplayedTime}/> 
        <TimeSelectButton btnTimeType={"month"} btnSetTime={this.setDisplayedTime}/>
        <TimeSelectButton btnTimeType={"year"} btnSetTime={this.setDisplayedTime}/>
        {/*  Text to display the apps state   */}
        <p>The current {this.state.timeType} is {this.state.timeValue}</p>
      </div>
    )
  }
}
export default App
