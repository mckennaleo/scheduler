import React, {useState} from "react";
import { render } from "@testing-library/react";

export default function Header(props) {
  return(
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
    )

}
