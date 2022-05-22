import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    //initialise constructor at the first and call super() method with props following the compulsion of react
  constructor(props) {
    super(props);
    this.state = { lat: null,errorMessage:null };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
          //use setState for updating the state 
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
          this.setState({errorMessage:err.message});
      }
    );
  }
  //render as per the compulsion of react
  render() {
    return (<div>
        Latitude:{this.state.lat}
    <br/>
        Error: {this.state.errorMessage}
        </div>    
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
