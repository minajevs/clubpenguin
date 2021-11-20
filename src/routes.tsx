import { Navigate, useRoutes } from "react-router-dom"
// layouts
import DashboardLayout from "./layouts/dashboard"
import LogoOnlyLayout from "./layouts/LogoOnlyLayout"
//
import App from "./pages/App"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DashboardApp from "./pages/DashboardApp"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import User from "./pages/User"
import NotFound from "./pages/Page404"
import CompletedChallenges from "./pages/CompletedChallenges"
import ShowerChallenge from "./pages/ShowerChallenge"
import { Achievements } from "./pages/Achiements"
import SoapChallenge from "./pages/SoapChallenge"
import BrushChallenge from "./pages/BrushChallenge"

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/app",
      element: <App />,
    },
    {
      path: "/challenges",
      element: <CompletedChallenges />,
    },
    {
      path: "/showerchallenge",
      element: <ShowerChallenge />,
    },
    {
      path: "/achievements/:type",
      element: <Achievements />,
    },
    {
      path: "/soapchallenge",
      element: <SoapChallenge />,
    },
    {
      path: "/brushchallenge",
      element: <BrushChallenge />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "user", element: <User /> },
        { path: "products", element: <Products /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/app" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ])
}
