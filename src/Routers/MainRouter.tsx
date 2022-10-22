import React from "react";

import {Route, Routes} from "react-router-dom";

import Layout from "@/Components/Layout/Layout";
import DataPage from "@/Pages/DataPage";


function HomePage() {
  return null;
}

export default function MainRouter() {
  return (
    <Layout>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<DataPage/>} path='/data'/>
      </Routes>
    </Layout>
  )
}
