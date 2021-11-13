/*
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



//new component
const ToDoList = ({tasks, match}) => {
    let filteredTask
    switch (match.params.filter){
        case 'completed':
            filteredTask = tasks.filter(tasks.completed)
            break;
        default:
            filteredTask = tasks
    }
    if (filteredTask === 0){
        return (
            <>
                <h1 className="m-3">My Tasks: ToDo List</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">There's no task to display</li>
                </ul>
            </>
        )
    }
    else
    {
        return (
            <>
                <h1 className="m-3">My Tasks: ToDo List</h1>
                <ul className="list-group m-3">
                    {
                        filteredTask.map((task) => <ToDo task={task} key={task.id}/>)
                    }

                </ul>
            </>
        )
    }
}

============================= Notes: Create a react static app =============================

- Pour utiliser un fichier CSS dans un composant React, on utilise la commande import .
- Pour définir la route dans un lien avec React Router, on utilise le composant NavLink .
- Avec React Router, on définit les routes possibles dans un composant Switch .
- On peut changer de composant selon le bouton pressé dans la page HTML.
- Pour permettre à un composant React de renvoyer un seul élément, on peut utiliser le composant React Fragment .
- Pour importer un composant, on utilise le mot-clé import .
- Pour rendre disponible un composant dans un module, il faut l'exporter .
- Pour utiliser des jeux d'icônes, on peut utiliser le paquet npm react-icons .
- ReactDOM.render() prend en premier paramètre le nom du composant à afficher .
- Create React App crée un div dans le fichier HTML nommé root .
- Pour obtenir les dépendances de React, on peut installer le paquet create-react-app avec npm.

*/



/*

============================= Notes: Create a react dynamic app =============================

 */