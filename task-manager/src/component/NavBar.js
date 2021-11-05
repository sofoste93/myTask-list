import React from 'react'
import {FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash} from "react-icons/all";


//..
const NavBar = () => (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
        <div className="btn-group">
            <a href="#" className="btn btn-outline-primary bg-light"><FaListAlt /></a>
            <a href="#" className="btn btn-outline-primary bg-light"><FaCheckSquare /></a>
            <a href="#" className="btn btn-outline-primary bg-light"><FaPlusSquare /></a>
        </div>
        <button className="btn btn-outline-danger bg-light"><FaTrash /></button>

    </footer>
)

export default NavBar