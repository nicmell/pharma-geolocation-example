import React from "react";

import {BugReport} from "@mui/icons-material";
import {IconButton} from "@mui/material";

import useAppSettings from "@/Hooks/useAppSettings";

export default function DebugButton () {
  const {debug, toggleDebug} = useAppSettings()
  return (
    <IconButton onClick={toggleDebug} size='large'>
      <BugReport color={debug ? 'primary' : undefined}/>
    </IconButton>
  )
}
