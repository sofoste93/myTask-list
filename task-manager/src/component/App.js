import React from 'react';
//import {FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash} from "react-icons/all";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddTask from "./AddTask";


//component App
class App extends React.Component{
    //<h1 className="m-3">My Task manager: ToDo List</h1>
    //if SWITCH does working, consider using Routes instead
    render() {
        return(
            <section id="todo">
                <BrowserRouter>
                    <Routes>
                        <Route path="/add-task" element={<AddTask />} />
                        <Route path="/" element={<ToDoList />} />
                    </Routes>
                    <NavBar/>

                </BrowserRouter>
            </section>
        )

    }
}

//export
export default App