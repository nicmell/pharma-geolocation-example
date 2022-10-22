
import React, {SyntheticEvent} from 'react'

import {Tabs} from '@mui/material'

import NavTab from "@/Components/Layout/NavTabs/NavTab";



function NavTabs () {
  const [value, setValue] = React.useState<number>(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Tabs onChange={handleChange} value={value}>
      <NavTab label='Home' to='/'/>
      <NavTab label='Data' to='/data'/>
    </Tabs>
  )
}

export default NavTabs
