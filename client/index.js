import React from "react";
import ReactDOM from "react-dom";
import Loading from "./components/loading/loading";
import "./index.less";

ReactDOM.render(
  <div>
    <h1 />
    <Loading Loading={true} />
  </div>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept();
}
