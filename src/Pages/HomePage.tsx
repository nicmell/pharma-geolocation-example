
import React from "react";

import {Grid} from "@mui/material";

import GoogleAutocomplete from "@/Components/Widgets/GoogleAutocomplete/GoogleAutocomplete";


export default function HomePage() {
  return (
    <div style={{height: '100%', padding: '64px 0'}}>
      <Grid container>
        <Grid alignItems='center' container item justifyContent='center'>
          <Grid item md={6} xs={12}>
            <GoogleAutocomplete/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
