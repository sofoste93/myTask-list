import React from 'react'
import ToDo from "./ToDo";
import initialData from "../initData";


const ToDoList = () => {
    return(
        <React.Fragment>
            <h1 className="m-3">My Tasks: ToDo List</h1>
            <ul className="list-group m-3">
                <li className="list-group-item d-flex justify-content-between">
                    Check motor oil and tire pressure
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Apply for a new position
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Review all offers
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Automate some tasks for Dreso
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>

            </ul>

        </React.Fragment>
    )
}
export default ToDoList