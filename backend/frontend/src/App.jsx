import "./App.css";
import Aboutus from "./compenents/AboutUs/Aboutus";
import Navbar from "./compenents/Navbar";
import Fot from "./compenents/footer/Fot";
import Home from "./compenents/home/home";
import Signin from "./compenents/signin/Signup";
import SignUp from "./compenents/signup/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./compenents/todo/Todo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
   const userId = sessionStorage.getItem("id");
  if (userId) {
    dispatch(authActions.login()); // or whatever payload your action expects
  }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      className="d-flex flex-column "
    >
      <div style={{ flex: "1" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<Aboutus />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<Signin />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Router>
      </div>
      <Fot />
    </div>
  );
}

export default App;
