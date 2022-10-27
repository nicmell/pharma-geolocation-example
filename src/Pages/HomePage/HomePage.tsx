import React from "react";

import {Grid} from "@mui/material";

import FormFeedback from "@/Components/Feedback/FormFeedback/FormFeedback";
import GeolocationForm from "@/Components/Forms/GeolocationForm/GeolocationForm";

export default function HomePage() {
  return (
      <Grid alignItems='center' container justifyContent='center'>
        <Grid item md={6} xs={12}>
          <GeolocationForm/>
          <div style={{margin: '32px 0'}}>
            <FormFeedback/>
          </div>
        </Grid>
      </Grid>
  )
}
