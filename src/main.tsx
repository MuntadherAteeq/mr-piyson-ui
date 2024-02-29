import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home.tsx"
import { Contact } from "./pages/Contact.tsx"

const router = createBrowserRouter([
  {
    path: "/mr-piyson-UI/",
    element: <App />,
    children: [
      {
        path: "/mr-piyson-UI/",
        element: <Home />,
      },
      {
        path: "/mr-piyson-UI/contact",
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
