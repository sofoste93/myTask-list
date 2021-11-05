
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from "react-icons/all";

//let's code

//component App
class App extends React.Component{
    render() {
        return(
            <section id="todo">
                <h1 className="m-3">My Task manager: ToDo List</h1>
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
                <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                    <div className="btn-group">
                        <a href="#" className="btn btn-outline-primary bg-light"><FaListAlt /></a>
                        <a href="#" className="btn btn-outline-primary bg-light"><FaCheckSquare /></a>
                        <a href="#" className="btn btn-outline-primary bg-light"><FaPlusSquare /></a>
                    </div>
                    <button className="btn btn-outline-danger bg-light"><FaTrash /></button>

                </footer>
            </section>

        )

    }
}
//call me
ReactDOM.render(<App />, document.getElementById('root'))