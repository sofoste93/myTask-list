import React from 'react'



class AddTask extends React.Component {

    //yarn add react-router-dom --save
    render() {
        return(
            <section>
                <h1 className="m-3">New task</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label form="taskName">Enter Task name</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required ref={input => this.newTask = input} />
                        </div><br/>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </section>
        )
    }
    // function handleSubmit
    handleSubmit(e) {
        return undefined;
    }
}

export default AddTask