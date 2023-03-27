import { useState, useEffect } from "react";
import axios from "axios";

function ViewTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //yet to fetch
    axios.get("").then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <div>
      <h1>View Todos</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.status}</td>
              <td>{todo.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        h1 {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 2rem;
        }

        th,
        td {
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #f2f2f2;
          font-size: 1.2rem;
          font-weight: 600;
        }

        tr:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
}

export default ViewTodos;
