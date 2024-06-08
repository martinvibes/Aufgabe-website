import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Home from "./pages/home.jsx";
import ContatUsPage from "./pages/contact.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import AboutMain from "./components/aboutPage/AboutMain.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import ItSupport from "./components/ItSupport.jsx";
import CloudServices from "./components/CloudServices.jsx";
import CyberSolutionsPage from "./components/CyberSolutionsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContatUsPage />,
  },
  {
    path: "/about",
    element: <AboutMain />,
  },
  {
    path: "/caseStudies",
    element: <CaseStudy />,
  },
  {
    path: "/cyber-solution",
    element: <CyberSolutionsPage />,
  },
  {
    path: "/it-support",
    element: <ItSupport />,
  },
  {
    path: "/cloud-services",
    element: <CloudServices />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Navigation />
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </>
  </React.StrictMode>,
);
