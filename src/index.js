import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    //initialise constructor at the first and call super() method with props following the compulsion of react
  constructor(props) {
    super(props);
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
          //use setState for updating the state 
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => {
        console.log(`---dj error message:`, err);
      }
    );
  }
  //render as per the compulsion of react
  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
