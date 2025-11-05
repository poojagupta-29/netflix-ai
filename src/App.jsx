import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import AppLayout from "./components/AppLayout";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import { Browse } from "./components/Browse/Browse";

import './assets/scss/main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/browse",
        element: <Browse />
      }
    ]
  }
])

function App() {

  return (
    <div className="relative bg-black">
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
