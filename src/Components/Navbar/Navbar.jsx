import React from 'react'
import {NavLink} from "react-router-dom"
import styled from "styled-components"

const NAVBAR = styled.div`
display:flex;
padding: 15px;
width:100%;
position: fixed;

>div>.nav-left{
  color:grey;
  margin-left:20px;
  text-decoration: none;
  cursor:pointer;
}
.nav-right{
  margin-left:75%;
  cursor:pointer;

  .nav-right-icon{
    color: grey;
    text-decoration: none;
  }
}

`;
export default function Navbar() {
    return (
      <div>
        <NAVBAR>
          <div>
            <NavLink className="nav-left" to="/">
              TransPack
            </NavLink>
            <NavLink className="nav-left" to="/">
              Dashboard
            </NavLink>
            <NavLink className="nav-left" to="/">
              Reports
            </NavLink>
          </div>
          <div className="nav-right">
            <NavLink to="/" className="nav-right-icon">
              Ashraf
            </NavLink>
          </div>
        </NAVBAR>
      </div>
    );
}
