import "./App.css";
import Body from "./pages/Body.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Video from "./pages/Video.jsx";
// import AuthContext from "./utils/AuthContext.js";
import Login from "./pages/Login.jsx";
import {AuthProvider} from "./Context/AuthContext.jsx";
import SignUp from "./pages/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Body />} />
        <Route path="video">
          <Route path=":id" element={<Video />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </>
  )
);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
