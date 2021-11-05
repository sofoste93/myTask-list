import React from 'react';
//import {FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash} from "react-icons/all";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";


//component App
class App extends React.Component{
    render() {
        return(
            <section id="todo">
                <h1 className="m-3">My Task manager: ToDo List</h1>
                <ToDoList />
                <NavBar/>
            </section>
        )

    }
}

//export
export default App