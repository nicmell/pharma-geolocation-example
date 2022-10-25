import React from "react";

import {Route, Routes} from "react-router-dom";

import MainLayout from "@/Components/Layout/MainLayout/MainLayout";
import DataPage from "@/Pages/DataPage/DataPage";
import HomePage from "@/Pages/HomePage/HomePage";




export default function MainRouter() {
  return (
    <MainLayout>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<DataPage/>} path='/data'/>
      </Routes>
    </MainLayout>
  )
}
