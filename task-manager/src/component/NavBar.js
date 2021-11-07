import React from 'react'
import { FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash } from "react-icons/all";
import { NavLink } from "react-router-dom";

//..
const NavBar = () => (
    //create links - using react-router-dom - replace <a>Tags with <NavLink> & <href> with 'to'
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-primary bg-light"><FaListAlt /></NavLink>
            <NavLink to="/completed" className="btn btn-outline-primary bg-light"><FaCheckSquare /></NavLink>
            <NavLink to="/add-task" className="btn btn-outline-primary bg-light"><FaPlusSquare /></NavLink>
        </div>
        <button className="btn btn-outline-danger bg-light"><FaTrash /></button>

    </footer>
)

export default NavBar