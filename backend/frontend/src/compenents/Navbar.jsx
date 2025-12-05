import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch= useDispatch();
  const logout=()=>{
    sessionStorage.clear();
    dispatch(authActions.logout());

  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          backgroundImage:
            "linear-gradient(to bottom,rgb(4, 0, 32)0%,rgb(4, 0, 32)20%,rgba(47, 33, 110, 1)80%,rgba(47, 33, 110, 1)100%)",
        }}
      >
        <div className="container-fluid ">
          <Link
            className="navbar-brand"
            style={{
              fontFamily: "initial",
              fontSize: "30px",
              color: "white",
            }}
            to="#"
          >
            Do
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              background: "white",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link
                  className="nav-link active info-btn"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link info-btn" to="/AboutUs">
                  About Us
                </Link>
              </li>
             
              {!isLoggedIn && (
                <>
                
                  <li className="nav-item">
                    <Link className="nav-link sign-btn" to="/signup">
                      Sign Up
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link sign-btn" to="/signin">
                      Sign In
                    </Link>
                  </li>
                </>
              )}

              {isLoggedIn && (
                <>
                <li className="nav-item">
                <Link className="nav-link info-btn" to="/todo">
                  To do
                </Link>
              </li>
                <li className="nav-item" >
                  <Link className="nav-link sign-btn" onClick={logout} to="/">
                    Log out
                  </Link>
                </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
//  <header
//         style={{
//           backgroundImage:
//             "linear-gradient(135deg,rgba(6, 68, 83, 1),rgba(55, 7, 77, 1))",
//           width: "100%",
//           height: "80px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "0 20px",

//           margin: "0",
//         }}
//       >
//         {/* logo    */}
//         <div>
//           <h1
//             style={{
//               color: "white",
//               padding: "5px 5px",
//             }}
//           >
//             To{" "}
//             <spam
//               style={{
//                 color: "red",
//                 marginLeft: "5px",
//               }}
//             >
//               DO
//             </spam>{" "}
//           </h1>
//         </div>
//         {/* Nav bar  */}
//         <div style={{
//           display:"flex",
//           alignItems:"center",
//           justifyContent:'space-between'
//         }}>
//           <div>
//             <button
//               classNameName="home"
//               style={{
//                 background: "transparent",
//                 color: "white",
//                 border: "1px solid white",
//                 borderRadius: "20px",
//                 padding: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               <Link>Home </Link>
//             </button>
//           </div>

//           <div>
//           <button style={{
//             background:"rgb(170, 8, 202)",
//             border:'none',
//             borderRadius:'12px',
//             padding:"2px",
//             cursor:"pointer"

//           }}>
//             <Link>Sign In </Link>
//           </button>

//           </div>
//         </div>
//       </header>
