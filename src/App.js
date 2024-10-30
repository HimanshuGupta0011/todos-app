import React, { useEffect, useState } from "react";
import Header from './Components/Header';
import Form from './Components/Form';
import Todos from './Components/Todos'

function App() {
  const [myTodos, setMyTodos] = useState([])
  return (
    <>
      <Header />
      <Form myTodos={myTodos} setTodos={setMyTodos} />
      <Todos myTodos={myTodos} setTodos={setMyTodos} />
    </>
  );
}

export default App;
