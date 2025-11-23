import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../Pages/Rider/Rider";
import SendPercell from "../Pages/SendPercell/SendPercell";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import MyPercels from "../Pages/Dashboard/MyPercels/MyPercels";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      { index: true, Component: Home },
      {
        path: "rider",
        element: (
          <PrivateRoutes>
            <Rider />
          </PrivateRoutes>
        ),
      },
      {
        path: "send-percel",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        element: (
          <PrivateRoutes>
            <SendPercell />
          </PrivateRoutes>
        ),
      },
      {
        path: "coverage",
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
        Component: Coverage,
      },
    ],
  },

  // AUTH ROUTES
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },

  // DASHBOARD ROUTES
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoardLayout />
      </PrivateRoutes>
    ),
    children: [
      { path: "my-percels", Component: MyPercels },
      { path: "payment/:id", Component: Payment },
    ],
  },
]);
