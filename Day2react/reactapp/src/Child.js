import { Component } from "react";
class Child extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Child Component is Mounted");
  }

  componentWillUnmount() {
    console.log(" ☠️ Child Component Is Unmounted");
  }

  render() {
    return (
      <>
        <h1> I am a Child Component </h1>
      </>
    );
  }
}
export default Child;
