import React from "react";

import {AppBar} from "@mui/material";

import NavTabs from "@/Components/Layout/NavTabs/NavTabs";
import RefreshButton from "@/Components/Widgets/RefreshButton/RefreshButton";

export default function NavBar() {
  return (
    <AppBar color='transparent' elevation={0} position='relative'>
      <div style={{display: "flex", padding: '16px 32px'}}>
        <div style={{flexGrow: 1}}>
          <NavTabs/>
        </div>
        <RefreshButton/>
      </div>
    </AppBar>
  );
}
