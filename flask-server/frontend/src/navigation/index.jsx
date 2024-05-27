// import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import Sidebar from "../components/sidebar";




const Navigation = () => {
  return (
    <>
      <div className="Navigate" style={{display: 'flex' }}>
        <Sidebar />
        
        <Header />
        
      </div>
      
      {/* <Routes>
      dinamic content
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
