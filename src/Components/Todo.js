import React from 'react'

function Todo({ todo, updateTodos }) {
    return (
        <div className="card mb-5">
            <div className="card-body">
                <h5 className="card-title text-primary">{todo.title}</h5>
                <p className="card-text">{todo.description}</p>
                <button type="button" className="btn btn-danger" onClick={
                    () => { 
                        updateTodos(todo.id);
                    }
                }>Remove Todo</button>
            </div>
        </div>
    )
}

export default Todo