import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
// import Profile from "../pages/profile";
// import Projects from "../pages/projects";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Home from "../pages/Home/index";
import Sidebar from "../components/sidebar";
// import Todo from "../components/Todo-section";
// import Progress from "../components/Progress";
// import Template from "../pages/Template";
// import Done from "../components/Done";

const Navigation = () => {
  return (
    <>
      <div className="Navigate" style={{display: 'flex', flexDirection: 'row'}}>
        <Sidebar />
        <Header />
      </div>
      {/* <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/sidebar" element={<Sidebar />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/template" element={<Template />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/done" element={<Done />} />
                </Routes> */}
    </>
  );
};

export default Navigation;
