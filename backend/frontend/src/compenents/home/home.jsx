import React from "react";
import Navbar from "../Navbar";
import Fot from "../footer/Fot";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom,rgb(4, 0, 32)0%,rgb(4, 0, 32)20%,rgba(47, 33, 110, 1)80%,rgba(47, 33, 110, 1)100%)",
        width: "100%vw",
        height: "100%",
      }}
      className="d-flex justify-content-center align-items-center flex-column  "
    >
      <h4
        style={{
          color: "white",
          textAlign:'center'
        }}
      >
        Ready To <spam style={{ color: "red" }}>Oraganise</spam> Your Self{" "}
      </h4>
      <button style={{
        marginTop:'5px',
        padding:'10px',
        color:'White',
        background:"red",
        border:'none',
        borderRadius:'12px',
        outline:"none",
        fontWeight:'500',
      }}>
        Start now 
      </button>
    </div>
  );
};

export default Home;
