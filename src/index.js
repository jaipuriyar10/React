import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {

 
    //alternative initialization method for state
    state={lat:null,errorMessage:null};


  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
    pos => 
            //use setState for updating the state 
          this.setState({ lat: pos.coords.latitude }),
    
        err => 
            this.setState({errorMessage:err.message})
        
      );
    };
  

    //we are using state as a prop here so keep in mind i.e state of one component can be used as the prop for another component
  //render as per the compulsion of react
  render() {
      if(this.state.errorMessage && !this.state.lat)
      return (
          <div>
              Error: {this.state.errorMessage}
          </div>
      )
      if(this.state.lat && !this.state.errorMessage)
      return (
          <div>
              <SeasonDisplay lat = {this.state.lat}/>
          </div>
      )
      return (
          <div>
              Loading....
          </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
