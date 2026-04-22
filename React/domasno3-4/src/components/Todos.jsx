import React from 'react';

export const Todos = ({ todos, markTodoAsDone, deleteTodo }) => {
  return (
    <ol>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <input
              type='checkbox'
              value={todo.done}
              checked={todo.done}
              onChange={() => { markTodoAsDone(todo) }}
            />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ol>
  );
};