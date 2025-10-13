import { Component } from "react";
import Child from "./Child";
import App2 from "./App2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showChild: true };
    // console.log("Component is Created - Log From Contructor Function");
  }

  componentDidMount() {
    // console.log("ComponentDidMount Is Called After Creation");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("Something is Updated");
    // console.log("previous state", prevState.showChild);
    // console.log("Current state", this.state.showChild);
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <>
        <h1>Hello World! </h1>

        {this.state.showChild ? <App2 /> : null}

        <button
          onClick={() => {
            if (this.state.showChild == true) {
              this.setState({ showChild: false });
            } else {
              this.setState({ showChild: true });
            }
          }}
        >
          Update
        </button>
      </>
    );
  }
}

export default App;
