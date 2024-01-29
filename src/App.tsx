import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/experience",
      element: <Experience />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
