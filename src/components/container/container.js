import React from "react";
import "./container.scss";

const Container = (props) => {
  return <div class="container">{props.children}</div>;
};

export default Container;
