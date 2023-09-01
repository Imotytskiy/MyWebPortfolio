import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Users from "./routes/users";
import Albums from "./routes/albums";
import Photos from "./routes/photos";
import { getUsers } from "./services/getUsers";
import { getAlbums } from "./services/getAlbums";
import { getPhotos } from "./services/getPhotos";
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter(
  
    {
      path: "/",
      element: <Users />,
      loader: getUsers,
    },
    {
      path: "/albums/:albumId",
      element: <Albums />,
      loader: getAlbums,
    },
    {
      path: "/albums/:albumId/photos",
      element: <Photos />,
      loader: getPhotos,
    },
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
