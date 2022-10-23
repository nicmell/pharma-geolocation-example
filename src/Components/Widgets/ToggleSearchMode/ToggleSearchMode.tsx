import React from "react";

import {Switch, Typography} from "@mui/material";

import useAppSettings from "@/Hooks/useAppSettings";

export function ToggleSearchMode() {
  const {useCoordinates, toggleUseCoordinates} = useAppSettings()
  return (
    <div>
      <Typography style={{margin: '4px 0'}} variant='subtitle2'>
        {'Utilizza coordinate'}
      </Typography>
      <Switch onChange={toggleUseCoordinates} size='small' value={useCoordinates} />
    </div>
  )
}
