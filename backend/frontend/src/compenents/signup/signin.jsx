import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

function SignUp() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/signin`, Inputs)
      .then((res) => {
        if (res.data.found == "true") {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          sessionStorage.setItem("id", res.data.others._id);
          dispatch(authActions.login());
          setTimeout(() => {
            navigate("/todo");
          }, 2000);
        }
        console.log(res);
        setInputs({
          email: "",
          username: "",
          password: "",
        });
      });
  };

  return (
    <div
      style={{
        height: "80vh",
        backgroundImage:
          "linear-gradient(to bottom,rgb(4, 0, 32)0%,rgb(4, 0, 32)20%,rgba(47, 33, 110, 1)80%,rgba(47, 33, 110, 1)100%)",
      }}
      className="d-flex  justify-content-center align-items-center gap-3"
    >
      <ToastContainer />
      <form
        style={{
          width: "60%",
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div style={{ color: "white" }} className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={Inputs.password}
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
            to="/SignIn"
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            Don't Have account{" "}
          </Link>
        </div>
        <button type="submit" onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </form>
      <img
        style={{
          opacity: ".3",
          borderRadius: "50%",
          boxShadow: "10px 22px 40px red",
        }}
        className="d-none d-sm-block"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCTi7qUfXLiBShZP0Dl1HrO9dtOJycESJGg&s"
      />
    </div>
  );
}

export default SignUp;
