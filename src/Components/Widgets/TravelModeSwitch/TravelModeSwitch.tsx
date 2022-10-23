import React from "react";

import {DirectionsBike, DirectionsCar, DirectionsTransit, DirectionsWalk} from "@mui/icons-material";
import {Button, ButtonGroup, ButtonProps, Typography} from "@mui/material";

import useAppSettings from "@/Hooks/useAppSettings";
import {TravelMode} from "@/Typings/google-maps";



export default function TravelModeSwitch() {

  const {travelMode, switchTravelMode} = useAppSettings()

  const handleChange =(value: TravelMode) => () => {
    switchTravelMode(value)
  }

  function buttonProps (mode: TravelMode) : ButtonProps {
    return {
      onClick: handleChange(mode),
      variant: travelMode === mode ? 'contained' : 'outlined',
      size: 'small'
    }
  }

  return (
    <div>
      <Typography style={{marginBottom: '8px'}} variant='subtitle2'>
        {'Metodo di trasporto'}
      </Typography>
      <ButtonGroup>
        <Button {...buttonProps('DRIVING')}>
          <DirectionsCar/>
        </Button>
        <Button {...buttonProps('BICYCLING')}>
          <DirectionsBike/>
        </Button>
        <Button {...buttonProps('WALKING')}>
          <DirectionsWalk/>
        </Button>
        <Button {...buttonProps('TRANSIT')}>
          <DirectionsTransit/>
        </Button>
      </ButtonGroup>
    </div>
  );
}
