import React from 'react'
import {NavLink} from "react-router-dom"
import styled from "styled-components"

const NAVBAR=styled.div`
display:flex;
height:60px;
border-top:1px solid black;
`
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
          <div>
            <NavLink to="/">Ashraf</NavLink>
          </div>
        </NAVBAR>
      </div>
    );
}
