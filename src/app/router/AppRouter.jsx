import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "../Layout";
import { HomePage } from "../../pages/HomePage";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/posts/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
