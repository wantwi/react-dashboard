import React from "react";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { Divider } from "@mui/material";

const Menus = [
  {
    menu: "Profile",
    icon: <BiIcons.BiUser />,
  },
  {
    menu: "My listing",
    icon: <BsIcons.BsCardChecklist />,
  },
  {
    menu: "Saves homes",
    icon: <RiIcons.RiHandHeartLine />,
  },
  {
    menu: "Saved Search",
    icon: <RiIcons.RiHomeGearLine />,
  },
  {
    menu: "Messages",
    icon: <TiIcons.TiMessages />,
  },
  {
    menu: "Notifications",
    icon: <FaIcons.FaCogs />,
  },
  {
    menu: "Billing",
    icon: <BsIcons.BsCalculator />,
  },
  {
    menu: "Anayltyics",
    icon: <AiIcons.AiOutlinePieChart />,
  },
  {
    menu: "Blog",
    icon: <GoIcons.GoChecklist />,
  },
];

function MenuList() {
  return (
    <>
      <Divider />
      {Menus.map((item) => (
        <div
          style={{
            borderBottom: "1px solid #cecece",
            overflow: "hidden",
            padding: "8px 0",
          }}
        >
          <div style={{ float: "left", width: "90%" }}>{item.menu}</div>
          <div style={{ float: "right", width: "10%" }}>{item.icon}</div>
        </div>
      ))}
    </>
  );
}

export default MenuList;
