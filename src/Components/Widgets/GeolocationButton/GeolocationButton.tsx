import React from "react";

import {Button} from "@mui/material";
import {useGeolocation} from "react-use";

import useAppSettings from "@/Hooks/useAppSettings";
import useForm from "@/Hooks/useForm";
import googleMapsClient from "@/Services/googleMapsClient";

export default function GeolocationButton() {
  const {useCoordinates} = useAppSettings()
  const {setInput, setError} = useForm()
  const {latitude: lat, longitude: lng, error, loading} = useGeolocation({enableHighAccuracy: true})
  const handleGeolocate = async () => {
    if (lat && lng) {
      const latLng = {lat, lng}
      if (useCoordinates) {
        setInput(latLng)
      } else {
        try {
          const {results} = await googleMapsClient.geocode(latLng)
          setInput(results[0].formatted_address)
        } catch (err) {
          setError(err as Error)
        }
      }
    }
  }
  return (
    <Button
      disabled={loading || !!error}
      onClick={handleGeolocate}
      size='small'
      style={{marginBottom: '-16px'}}
      variant='outlined'
    >
      {"Usa posizione attuale"}
    </Button>
  )
}
