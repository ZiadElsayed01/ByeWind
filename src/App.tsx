import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Notfound from "./pages/Notfound";
import OverviewHome from "./pages/OverviewHome";
import Overview from "./components/Overview";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Overview />,
        children: [
          { index: true, path: "/", element: <OverviewHome /> },
          { path: "targets", element: <Notfound /> },
          { path: "budget", element: <Notfound /> },
          { path: "users", element: <Notfound /> },
          { path: "files", element: <Notfound /> },
          { path: "activity", element: <Notfound /> },
          { path: "settings", element: <Notfound /> },
        ],
      },
      {
        path: "/e-commerce",
        element: <Notfound />,
        children: [
          { path: "products", element: <Notfound /> },
          { path: "orders", element: <Notfound /> },
          { path: "customers", element: <Notfound /> },
          { path: "analytics", element: <Notfound /> },
          { path: "inventory", element: <Notfound /> },
        ],
      },
      {
        path: "/projects",
        element: <Notfound />,
        children: [
          { path: "active-projects", element: <Notfound /> },
          { path: "completed", element: <Notfound /> },
          { path: "templates", element: <Notfound /> },
          { path: "team", element: <Notfound /> },
          { path: "reports", element: <Notfound /> },
        ],
      },
      {
        path: "/user-profile",
        element: <Notfound />,
        children: [
          { path: "overview", element: <Notfound /> }, // ✅ بدون /
          { path: "projects", element: <Notfound /> },
          { path: "campaigns", element: <Notfound /> },
          { path: "documents", element: <Notfound /> },
          { path: "followers", element: <Notfound /> },
        ],
      },
      {
        path: "account",
        element: <Notfound />,
      },
      {
        path: "corporate",
        element: <Notfound />,
      },
      {
        path: "blog",
        element: <Notfound />,
      },
      {
        path: "social",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
