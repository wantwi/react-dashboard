import React from 'react'
import * as BiIcons from "react-icons/bi"
import { Divider } from "@mui/material";

const Menus = [
    {
        menu:"Profile",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"My listing",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"Saves homes",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"Saved Search",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"Messages",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"Notifications",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"Billing",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"Anayltyics",
        icon: <BiIcons.BiUser/>
    },
    {
        menu:"Blog",
        icon: <BiIcons.BiUser/>
    }
]




function MenuList() {
    return (

            <>
              <Divider />
                {
                       Menus.map(item =>(
                        <div style={{borderBottom:"1px solid #cecece",overflow:"hidden", padding:"8px 0"}}>
                        <div style={{float:"left",width:"90%"}}>{item.menu}</div>
                        <div style={{float:"right",width:"10%"}}>{item.icon}</div>
                        </div>
                    ))
               
                }
            </>
         
        
    )
}

export default MenuList
