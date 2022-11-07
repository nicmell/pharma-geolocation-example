import React, {PropsWithChildren} from "react";

import ReactJson from "react-json-view";

import MainLayout from "@/Components/Layout/MainLayout/MainLayout";
import store from "@/Store/store";


export type LayoutProps = PropsWithChildren

export default function DebugLayout({children}: LayoutProps) {
  const storeData = JSON.parse(JSON.stringify(store()))
    return (
      <div style={{height: '100vh'}}>
        <div style={{height: '50vh', overflowY: 'scroll'}}>
          <MainLayout>
            {children}
          </MainLayout>
        </div>
        <div style={{height: '50vh', overflowY: 'scroll', backgroundColor: 'rgba(0, 0, 0, 0.06)'}}>
          <div style={{padding: '16px'}}>
            <ReactJson src={storeData}/>
          </div>
        </div>
      </div>
    )
}
