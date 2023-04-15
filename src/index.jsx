import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/portfolio",
    element: <Homepage />,
  },
  {
    path: "/portfolio/about",
    element: <About />,
  },
  {
    path: "/portfolio/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
