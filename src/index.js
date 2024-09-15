import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Order from "./components/Order";
import Error from "./components/Error";
import Body from "./components/Body";
import Restaurant from "./components/Restaurant";
import AboutClass from "./components/AboutClass";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      {
        path: "/about",
        element: <AboutClass name={"aruna class component"} location = {"hyderabd"} />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/restaurant/:restId",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={appRouter} />
  // <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
