import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./Pages/DashboardLayout";
import DashboardNav from "./Pages/DashboardNav";
import Lending from "./Pages/Lending";
import DetailQandA from "./Pages/Q&Adetail";
import QandAmodal from "./Pages/QandAmodal";

export default function Router() {
  return useRoutes([
    <DashboardNav />,

    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    { path: "/dashboard/QueAns", element: <DetailQandA /> },

    {
      path: "/dashboard/Question-form",
      element: <QandAmodal />,
    },

    // { path: "/", element: <Navigate to="/dashboard/app" /> },

    {
      path: "/",
      element: <Lending />,
    },
    <Footer />,
  ]);
}
