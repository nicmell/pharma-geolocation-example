import React, {ReactElement} from "react";

import ReactJson from "react-json-view";

import useAppSettings from "@/Hooks/useAppSettings";
import store from "@/Store/store";


export type DebugLayoutProps = {children: ReactElement[]}

export default function DebugLayout({children}: DebugLayoutProps) {
  const {debug} = useAppSettings()
  const storeData = JSON.parse(JSON.stringify(store()))
  if (debug) {
    return (
      <div style={{height: '100%'}}>
        <div style={{height: '50vh', overflow: 'scroll'}}>
          {children}
        </div>
        <div style={{height: '50vh', position: 'relative',  overflow: 'scroll'}}>
          <ReactJson
            src={storeData}
            style={{backgroundColor: 'rgba(0, 0, 0, 0.06)', padding: '16px', borderTop: 'solid 1px rgba(0, 0, 0, 0.16)'}}
          />
        </div>
      </div>
    )
  }
  return (
    <>{children}</>
  )
}
