import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "$/routes/root";
import IndexPage from "$/routes";
import PlaygroundPage from "$/routes/playground/page";
import AspectRatioPage from "$/routes/playground/aspect-ratio/page";
import CardLinkPage from "$/routes/playground/card-link/page";
import AppleSequencePage from "$/routes/playground/apple-sequence/page";
import DesignSystemPage from "$/routes/playground/design-system/page";
import ErrorPage from "$/error";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <IndexPage /> },
      {
        path: "playground",
        element: <PlaygroundPage />,
      },
      {
        path: "playground/aspect-ratio",
        element: <AspectRatioPage />,
      },
      {
        path: "playground/card-link",
        element: <CardLinkPage />,
      },
      {
        path: "playground/apple-sequence",
        element: <AppleSequencePage />,
      },
      {
        path: "playground/design-system",
        element: <DesignSystemPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
