import React from "react";
import * as BiIcons from "react-icons/bi";
import { Divider } from "@mui/material";

function Card3({chart}) {
  return (
    <div style={{ border: "1px solid #f1f1f1", overflow: "hidden" }}>
      <div
        style={{
          float: "left",
          textAlign: "center",
          width: 40,
          height: 40,
          borderRadius: "10px",
          background: "#016450",
        }}
      >
        <BiIcons.BiWallet
          style={{ color: "#fff", fontSize: 20, marginTop: 8 }}
        />
      </div>
      <div style={{ float: "left", width: "50%", marginLeft: 15 }}>
        <h6>Total Sales</h6>
        <span>$985.56</span>
      </div>
      <div style={{ float: "right", marginRight: 10 }}>
        <BiIcons.BiDotsHorizontalRounded />
      </div>
    
      <div>
        <div>{chart}</div>
        <div></div>
      </div>
    </div>
  );
}

export default Card3;
