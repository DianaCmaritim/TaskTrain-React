import { useState, useEffect } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => {
        console.error(err);
        alert('Failed to fetch todos.');
      });
  }, []);

  const deleteTodo = (id) => {
    //yet to fetch
    fetch(/*`http://localhost:3000/todos/${id}`*/ {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status === 204) {
          setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        }
      })
      .catch(err => {
        console.error(err);
        alert('Failed to delete todo.');
      });
  };

  if (todos.length === 0) {
    return <div>Loading...</div>;
  }

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
