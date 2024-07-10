import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./pages/Inicio";
import Activity from "./pages/Activity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: '/activity',
        element: <Activity />,
      },
    ],
  },
]);

export default router;


