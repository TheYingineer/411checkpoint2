import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";

const Navigation = () => {
  const navigate = useNavigate();
  const cookies = cookie.parse(document.cookie)
  console.log(cookies) // this shows what the cookie looks like when you login

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          mybusinessapp
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          {/* <li className="nav-list-item">
            <Link to="/login">Login</Link>
          </li> */}

          {/* added the condition rendering, where when you login, 
          there will be a logout on the right. Vise versa, whne you logout, 
          there will be login on the right
           */}
          {cookies.loggedIn ? (
            <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
                navigate("/login");
              }}
            >
              {" "}
              Logout{" "}
            </li>
          ) : (
            <li
              className="nav-list-item"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </li>
          )}
          {/*end of the conditional rendering for login/logout  */}

          <li className="nav-list-item">
            <Link to="/AddNewListing">AddNewListing</Link>
          </li>
          {/* <li className="nav-list-item">
            <Link to="/BizDetails">BizDetails</Link>
          </li> */}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
