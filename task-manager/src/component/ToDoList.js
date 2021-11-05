import React from 'react'

//new component
const ToDoList = () => (
    //my list
    <ul className="list-group m-3">
        <li className="list-group-item d-flex align-items-center">
            Ranger la vaisselle
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
            Répondre à l'appel d'offres
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
            Signer contrat
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
        <li className="list-group-item d-flex align-items-center">
            Ranger le salon
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li>
    </ul>
)

export default ToDoList