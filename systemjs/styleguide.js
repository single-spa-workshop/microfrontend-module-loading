import React from "react";

export function Widget(props) {
  return <div style={{ border: "1px solid lightblue" }}>{props.children}</div>;
}
