import React from "react";

import {RefreshOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";

import store from "@/Store/store";


export default function RefreshButton() {
  const reset = store((store) => store.reset)
  return (
    <IconButton onClick={reset} size='large'>
      <RefreshOutlined/>
    </IconButton>
  )
}
