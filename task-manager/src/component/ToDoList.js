import React from 'react'

//new component
const ToDoList = () => (
    //my list - <h1 className="m-3">My Task manager: ToDo List</h1> not allowed here
    // encapsulate them into a <div></div> for example - But instead of using <div>, use react-fragments
    <React.Fragment>
        <h1 className="m-3">My Task manager: ToDo List</h1>
        <ul className="list-group m-3">
            <li className="list-group-item d-flex align-items-center">
                Check motor oil and tires pressure
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-items-center">
                Apply for a new position
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-items-center">
                Review all offers
                <button className="btn btn-sm btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-items-center">
                Automate task for Dreso
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
        </ul>
    </React.Fragment>
)

export default ToDoList