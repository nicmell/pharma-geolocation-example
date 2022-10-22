import React from "react";

import {RefreshOutlined} from "@mui/icons-material";
import {IconButton} from "@mui/material";

import usePharmaData from "@/Hooks/usePharmaData";


export default function RefreshButton() {
  const {fetchData} = usePharmaData()
  return (
    <IconButton size='large'>
      <RefreshOutlined onClick={() => fetchData()}/>
    </IconButton>
  )
}
