
import React from 'react'

import {Tabs} from '@mui/material'
import {useLocation} from "react-router-dom";

import NavTab from "@/Components/Layout/NavTabs/NavTab";



function NavTabs () {
  const {pathname} = useLocation()
  return (
    <Tabs value={pathname}>
      <NavTab label='Home' value='/'/>
      <NavTab label='Data' value='/data'/>
    </Tabs>
  )
}

export default NavTabs
