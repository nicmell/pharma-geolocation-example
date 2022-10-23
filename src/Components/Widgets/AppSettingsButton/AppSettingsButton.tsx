import React from "react"

import SettingsIcon from '@mui/icons-material/Settings';
import {IconButton, Menu, Stack} from "@mui/material";

import {ToggleSearchMode} from "@/Components/Widgets/ToggleSearchMode/ToggleSearchMode";
import TravelModeSwitch from "@/Components/Widgets/TravelModeSwitch/TravelModeSwitch";


export default function AppSettingsButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton onClick={handleClick} size='large'>
        <SettingsIcon/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={handleClose}
        open={open}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack direction='column' spacing={3} style={{padding: '8px 24px'}}>
          <ToggleSearchMode/>
          <TravelModeSwitch/>
        </Stack>
      </Menu>
    </div>
  )
}
