import React from "react";
import { adminRoutes, publicRoutes } from "./router.link.tsx";
// import {  publicRoutes } from "./router.link.tsx";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminSidebar from "../admin/layout/sidebar.tsx";
import AdminHeader from "../../core/admin/adminHeader.tsx";
import ThemeSettings from "../../core/common/themeSettings.tsx";

const AllRoutes = () => {
  const HeaderLayout = () => (
    <>
      <Outlet />

    </>
  );
  const AdminLayout = () => (
    <>
      <AdminHeader />
      <AdminSidebar />
      <Outlet />
      <ThemeSettings/>

    </>
  );
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HeaderLayout />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
        <Route path={"/admin/"} element={<AdminLayout />}>
          {adminRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

      </Routes>
    </>
  );
};
export default AllRoutes;

