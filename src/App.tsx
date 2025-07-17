import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Notfound from "./pages/Notfound";
import OverviewHome from "./pages/OverviewHome";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "overview",
        children: [
          { index: true, element: <OverviewHome /> }, // Only for /overview
          { path: "overview", element: <OverviewHome /> },
          { path: "targets", element: <Notfound /> },
          { path: "budget", element: <Notfound /> },
          { path: "users", element: <Notfound /> },
          { path: "files", element: <Notfound /> },
          { path: "activity", element: <Notfound /> },
          { path: "settings", element: <Notfound /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
