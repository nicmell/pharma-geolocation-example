import React from "react";
import {forwardRef, useMemo} from "react";

import {Tab, TabProps} from "@mui/material";
import {NavLink, NavLinkProps} from "react-router-dom";

export type NavTabProps = TabProps & {
  to: NavLinkProps['to']
}


export default function NavTab (props: NavTabProps) {
  const {to, ...other} = props
  const linkComponent = useMemo(
    () => forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'>>(
      function TabLink (props: Omit<NavLinkProps, 'to'>, ref) {
        return (
          <NavLink ref={ref} to={to} {...props}/>
        )
      })
    , [to]) as React.ComponentType
  return (
    <Tab
      component={linkComponent}
      value={to}
      {...other}
    />
  )
}
