import React, { Component } from "react";
import { Route } from "react-router-dom";
import PageAversion2 from "./PageAversion2";
import PageBversion2 from "./PageBversion2";
import UserScreen from "./UserScreen";
import Excel from "./Excel";
import FunctionUser from "./FunctionUser";
import SavePNG from "./SavePNG";
import Fixeditems from "./Fixeditems";
import HOMEPAGE from "./HOMEPAGE";
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact={true} component={HOMEPAGE} />
        <Route path="/PageAversion2" exact={true} component={PageAversion2} />
        <Route path="/navuser" component={UserScreen} />
        <Route path="/PageBversion2" exact={true} component={PageBversion2} />

        <Route path="/process" exact={true} component={PageBversion2} />
        <Route path="/Excel" exact={true} component={Excel} />
        <Route path="/FunctionUser" exact={true} component={FunctionUser} />
        <Route path="/SavePNG" exact={true} component={SavePNG} />
        <Route path="/Fixeditems" exact={true} component={Fixeditems} />
      </div>
    );
  }
}
export default App;
