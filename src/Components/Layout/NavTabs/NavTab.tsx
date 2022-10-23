import React from "react";
import {forwardRef, useMemo} from "react";

import {Tab, TabProps} from "@mui/material";
import {NavLink, NavLinkProps} from "react-router-dom";

export type NavTabProps = TabProps

export default function NavTab (props: NavTabProps) {
  const {value, ...other} = props
  const linkComponent = useMemo(
    () => forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'>>(
      function TabLink (props: Omit<NavLinkProps, 'to'>, ref) {
        return (
          <NavLink ref={ref} to={value} {...props}/>
        )
      })
    , [value]) as React.ComponentType
  return (
    <Tab
      component={linkComponent}
      value={value}
      {...other}
    />
  )
}
