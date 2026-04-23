import React, { useEffect, useState } from 'react';

export const Todos = () => {

  const [todos, setTodos] = useState([]);

  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => setTodos(json))
      .catch(err => alert(err));
  }

  useEffect(() => {
    getTodos();
  }, []);

  function toggleTodo(clickedTodo) {
    setTodos(
      todos.map(todo =>
        todo.id === clickedTodo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <div id='todos'>

      {todos.length > 0 ? (
        <ol>
          {todos.slice(0, 20).map(todo => {
            return (
              <li key={todo.id}>
                <span>{todo.title}</span>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo)}
                />
              </li>
            );
          })}
        </ol>
      ) : (
        <h2>Loading...</h2>
      )}

    </div>
  );
};