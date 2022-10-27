import React from "react";

import {Switch, Typography} from "@mui/material";

import useAppSettings from "@/Hooks/useAppSettings";
import useForm from "@/Hooks/useForm";

export function ToggleSearchMode() {
  const {reset: resetForm} = useForm()
  const {useCoordinates, toggleUseCoordinates} = useAppSettings()
  const handleChange = () => {
    resetForm()
    toggleUseCoordinates()
  }
  return (
    <div>
      <Typography style={{margin: '4px 0'}} variant='subtitle2'>
        {'Utilizza coordinate'}
      </Typography>
      <Switch onChange={handleChange} size='small' value={useCoordinates} />
    </div>
  )
}
