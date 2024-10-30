import React, { useState } from 'react'

function Form({ myTodos, setTodos }) {
    const [id, setId] = useState(1)
    const [myTitle, setMyTitle] = useState("");
    const [myDescription, setMyDescription] = useState("");
    return (
        <div className="bg-info-subtle py-5">
            <div className="px-5">
                <label htmlFor="formGroupExampleInput" className="form-label">Title</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" onChange={
                    (e) => { setMyTitle(e.target.value) }} />
            </div>
            <div className="mx-5 mt-4">
                <label htmlFor="formGroupExampleInput2" className="form-label">Description</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" onChange={
                    (e) => { setMyDescription(e.target.value) }} />
            </div>
            <div className="mx-5 mt-4">
                <button type="button" className="btn btn-success" onClick={() => {
                    setTodos([...myTodos, {id: id, title: myTitle, description: myDescription}])
                    setId(id+1);
                }}>Add Todo</button>
            </div>
        </div>
    )
}

export default Form