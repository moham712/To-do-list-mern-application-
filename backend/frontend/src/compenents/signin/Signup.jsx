import React from "react";
import { useState ,useEffect} from "react";
import "./Signin.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signin() {
  const Navigate = useNavigate();
  
  
  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, Inputs)
      .then((res) => {
        if (res.data.found == "true") {
          toast.error(res.data.message);
          setTimeout(() => {
            Navigate("/signup");
          }, 1500);
        } else {
          toast.success(res.data.message);
        }
        console.log(res);
        setInputs({
          email: "",
          username: "",
          password: "",
        });
      });
  };
  useEffect(() => {
     setInputs({
          email: "",
          username: "",
          password: "",
        });
  
    
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to bottom,rgb(4, 0, 32)0%,rgb(4, 0, 32)20%,rgba(47, 33, 110, 1)80%,rgba(47, 33, 110, 1)100%)",
      }}
      className="d-flex  justify-content-center align-items-center gap-3"
    >
      <ToastContainer />
      <form
        style={{
          width: "70%",
          border: "1px solid blue ",
          padding: "20px",
          borderRadius: "10px",
        }}
        className="focss"
      >
        <div style={{ color: "white" }} className="mb-3 contaier">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={Inputs.email}
            name="email"
            onChange={change}
          />
        </div>
        <div style={{ color: "white" }} className="mb-3 contaier">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={Inputs.username}
            name="username"
            onChange={change}
          />
        </div>
        <div style={{ color: "white" }} className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={Inputs.password}
            name="password"
            onChange={change}
          />
        </div>
        <div style={{ color: "white" }} className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
          <Link
            to="/SignUp"
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            Have account{" "}
          </Link>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
