import { Button } from "@mui/material";
import React from "react";
import ProfileImage from "../images/profile.jpg";


function Profile() {
  return (
    <div
      style={{
        marginBottom: "40px",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div style={{ borderRadius: "50%" }}>
        <img
          src={ProfileImage}
          alt="profile"
          width="80px"
          height="80px"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <h5 style={{ padding: 0, margin: 2,fontSize:"16px" }}>Alex Assenmacher</h5>
      <h6
        style={{
          padding: 0,
          margin: 10,
          color: "#767676",
          fontWeight: "400",
          fontSize:"12px"
        }}
      >
        Home Buyer
      </h6>

      <Button
        style={{
          textTransform: "capitalize",
          color: "#ffffff",
          background: "#016450",
          width:"110px",
          fontSize:"12"
        }}
        size="small"
      >
        Edit profile
      </Button>

    
    </div>
  );
}

export default Profile;
