import React from 'react'
import Todo from './Todo'

function Todos({ myTodos, setTodos }) {
    const updtTodos = (id) => {
        console.log("Remove")
        setTodos(myTodos.filter((todo) => {
            return todo.id !== id;
        }))
    }
    return (
        <div className="bg-dark px-5 py-5" style={{minHeight: "50.3vh"}}>
            {myTodos.map((todo) => {
                return <Todo key={todo.id} todo={todo} updateTodos={updtTodos} />
            })}
        </div>
    )
}

export default Todos