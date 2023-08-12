import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Signup from "./pages/signup";
import Home from "./pages/home";
import Layout from "./components/layout";
import Scholarship from "./pages/scholarship";
import Login from "./pages/login";
import Courses from "./pages/courses";
import Products from "./pages/product";
import Aboutus from "./pages/aboutus";
import Forum from "./pages/forum";

import Template from "./pages/template";
import AddCourse from "./pages/addcourses";
import AddScholarship from "./pages/addscholarship";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="registration" element={<Signup />} />
      <Route path="scholarship" element={<Scholarship />} />
      <Route path="login" element={<Login />} />
      <Route path="courses" element={<Courses />} />
      <Route path="addcourses" element={<AddCourse/>}/>
      <Route path="addscholarship" element={<AddScholarship/>}/>
      <Route path="market" element={<Products />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="forum" element={<Forum />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/forum" element={<Forum />} />

      <Route path="/forum/biology" element={<Template value='biology' />} />
      <Route path="/forum/mathematics" element={<Template value="mathematics" />} />
      <Route path="/forum/economics" element={<Template value="economics" />} />
      <Route path="/forum/english" element={<Template value="english"/>} />
      <Route path="/forum/hindi" element={<Template value="hindi"/>} />
      <Route path="/forum/physics" element={<Template value="physics" />} />
      <Route path="/forum/chemistry" element={<Template value="chemistry" />} />
      <Route path="/forum/java" element={<Template value="java" />} />
      <Route path="/forum/c" element={<Template value="c"/>} />
      <Route path="/forum/management" element={<Template value="management"/>} />
      <Route path="/forum/cpp" element={<Template value="cpp"/>} />
      <Route path="/forum/communication" element={<Template value="communication"/>} />
      <Route path="/forum/python" element={<Template value="python" />} />

    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
