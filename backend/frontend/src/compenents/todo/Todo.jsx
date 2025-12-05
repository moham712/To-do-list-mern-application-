import React, { useState } from "react";
import "./todo.css";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
function Todo() {
  let id = sessionStorage.getItem("id");
  const [show, setshow] = useState(false);
  const [email, setEmail] = useState("");
  const [Inputs, setInputs] = useState({ title: "", body: "", _id: "" });
  const [Array, setArray] = useState([]);
  const [err, showErr] = useState(false);
  const [userId, setUserId] = useState("");
  const showbody = () => {
    setshow(!show);
  };

  useEffect(() => {
    let id2 = sessionStorage.getItem("id");
    setUserId(id2);
    console.log(id2);
    const gettask = async () => {
      try {
        await axios
          .get(`${window.location.origin}/api/v2/getTask/${id2}`)
          .then((res) => {
            setArray(res.data.list);
          });
      } catch (err) {
        console.log(err);
      }
    };
    gettask();
  }, []);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    if (Inputs.body.trim() === "" || Inputs.title.trim() === "") {
      showErr(true);
      setTimeout(() => {
        showErr(false);
      }, 1500);
      toast.error("Failed to Add ");
      return;
    } else {
      console.log("trying to fetch data1....");

      await axios
        .post(`${window.location.origin}/api/v2/addTask`, {
          title: Inputs.title,
          body: Inputs.body,
          id: id,
        })
        .then((res) => {
          const newTask = {
            _id: res.data.list._id,
            title: Inputs.title,
            body: Inputs.body,
          };
          setArray([...Array, newTask]);
          toast.success("The operation has completeley succeed ");
        })
        .catch((err) => {
          console.log("there is an error in adding task :", err);
        })
        .finally(() => {
          console.log("we reach the final state");
        });
    }

    setInputs({
      title: "",
      body: "",
    });
  };
  const del = async (id) => {
    console.log("this the userId", userId);
    const userE = await axios.get(
      `${window.location.origin}/api/v1/getUserEmail/${userId}`
    );

  const   UserEmail=userE.data.user.email;
    await axios
      .delete(`${window.location.origin}/api/v2/deleteTask/${id}`, {data:{email:UserEmail} })
      .then((res) => {
        const gettask = async () => {
      try {
        await axios
          .get(`${window.location.origin}/api/v2/getTask/${userId}`)
          .then((res) => {
            setArray(res.data.list);
          });
      } catch (err) {
        console.log(err);
      }
    };
    gettask();
      });
  };

  return (
    <div
      style={{
        width: "100%vw",
        height: "100%",

        backgroundImage:
          "linear-gradient(to bottom,rgb(4, 0, 32)0%,rgb(4, 0, 32)20%,rgba(47, 33, 110, 1)80%,rgba(47, 33, 110, 1)100%)",
      }}
    >
      <ToastContainer />
      <div
        className="d-flex container flex-column  justify-content-center align-items-center "
        style={{ width: "100vw", filter: err ? "blur(20px)" : "blur(0)" }}
      >
        <div className=" d-flex flex-column  mt-5 w-75 anim">
          <input
            style={{
              border: "none",
              outline: "none",
              paddingLeft: "20px",
              height: "60px",
            }}
            type="text"
            placeholder="Title"
            className="inputs"
            name="title"
            onClick={showbody}
            value={Inputs.title}
            onChange={change}
          ></input>
          <textarea
            style={{
              display: show ? "block" : "none",
              border: "none",
              outline: "none",
              paddingLeft: "20px",
              height: "60px",
            }}
            placeholder="Body"
            name="body"
            className=""
            value={Inputs.body}
            onChange={change}
          ></textarea>
        </div>
        <div className="d-flex align-items-center bc-primary w-75 justify-content-end mt-3">
          <button
            style={{
              outline: "none",
              border: "none",
              width: "10%",
              borderRadius: "12px",
              padding: "8px",
              color: "white",
              background: "red ",
            }}
            onClick={submit}
          >
            Add
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
        }}
        className="d-flex   justify-content-center"
      >
        <div
          style={{
            display: err ? "block" : "none",
            transition: "all ease .8s",
            width: "80%",
            padding: "12px",
            textAlign: "center",
            background: "white",
            color: "black",
            borderRadius: "2px",
          }}
        >
          <p>You did not fill one of The parameters </p>
          <p>❌❌</p>
        </div>
      </div>
      <div
        className="container d-flex justif-content-center   "
        style={{
          marginTop: "20px",
          filter: err ? "blur(20px)" : "blur(0)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            width: "100%",
            alignContent: "flex-start",
            paddingBottom: "20px",
          }}
        >
          {Array.map((item, index) => {
            if (item.title != "" && item.body != "") {
              return (
                <TodoCard
                  key={index}
                  id={item._id}
                  title={item.title}
                  body={item.body}
                  deletion={del}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
