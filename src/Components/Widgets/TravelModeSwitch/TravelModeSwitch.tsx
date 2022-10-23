import React from "react";

import {DirectionsBike, DirectionsCar, DirectionsTransit, DirectionsWalk} from "@mui/icons-material";
import {Button, ButtonGroup, ButtonProps, useControlled} from "@mui/material";

import {TravelMode} from "@/Typings/google-maps";

export type TravelModeSwitchProps = {
  value?: TravelMode
  defaultValue?: TravelMode
  onChange?: (value: TravelMode) => void
}

export default function TravelModeSwitch(props : TravelModeSwitchProps) {
  const {defaultValue = 'DRIVING', value: valueProp, onChange} = props
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'TravelModeSwitch'
  })
  const handleChange =(value: TravelMode) => () => {
    setValue(value)
    onChange && onChange(value)
  }

  function buttonProps (mode: TravelMode) : ButtonProps {
    return {
      onClick: handleChange(mode),
      variant: value === mode ? 'contained' : 'outlined',
      size: 'small'
    }
  }

  return (
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
  );
}
