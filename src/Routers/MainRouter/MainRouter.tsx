import React, {useEffect} from "react";

import {Route, Routes} from "react-router-dom";

import DebugLayout from "@/Components/Layout/DebugLayout/DebugLayout";
import MainLayout from "@/Components/Layout/MainLayout/MainLayout";
import useAppSettings from "@/Hooks/useAppSettings";
import usePharmaData from "@/Hooks/usePharmaData";
import DataPage from "@/Pages/DataPage/DataPage";
import HomePage from "@/Pages/HomePage/HomePage";


export default function MainRouter() {

  const {debug} = useAppSettings()
  const LayoutComponent = debug ? DebugLayout : MainLayout

  const {fetchData} = usePharmaData()
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <LayoutComponent>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<DataPage/>} path='/data'/>
      </Routes>
    </LayoutComponent>
  )
}
