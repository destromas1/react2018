import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import "./index.css";
import App from "./app/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { HashRouter, Switch, Route} from "react-router-dom";

import SpeakerPage from "./app/speakers/SpeakerPage";

ReactDOM.render(
  // <Provider store={store}>
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/speakers" component={SpeakerPage} />
    </Switch>
  </HashRouter>,
  // </Provider>,
  document.getElementById("root")
);

