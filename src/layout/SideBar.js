import React from "react";

import MenuList from "../components/MenuList";
import Profile from "../components/Profile";
import { InputGroup, FormControl } from "react-bootstrap";
import * as BiIcons from "react-icons/bi";

function SideBar() {
  return (
    <div style={{ padding: "25px 25px 40x 25px" }}>
      <Profile />
      <MenuList />
      <div style={{ marginTop: 30 }}>
        <p style={{ padding: 0, margin: 0 }}>Profile link</p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="https://www.udwell.com/p."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value="https://www.udwell.com/p."
          />
          <InputGroup.Text id="basic-addon2" style={{ background: "#fff" }}>
            <BiIcons.BiCopy />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
}

export default SideBar;
