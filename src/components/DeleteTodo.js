import { useState, useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err));
  }, []);

  const deleteTodo = (id) => {
    fetch(`/todos/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 204) {
          setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
