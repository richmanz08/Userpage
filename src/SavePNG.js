import {
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React from "react";
class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <img src="./home.png"></img>
      </div>
    );
  }
}
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <ComponentToPrint ref={this.componentRef} />

        <button onClick={() => exportComponentAsPDF(this.componentRef)}>
          Export As PDF
        </button>
        <button onClick={() => exportComponentAsPNG(this.componentRef)}>
          Export As PNG
        </button>
      </React.Fragment>
    );
  }
}
