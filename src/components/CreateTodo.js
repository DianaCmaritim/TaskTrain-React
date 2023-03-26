import { useState } from 'react';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);
  const [priority, setPriority] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = sessionStorage.getItem('user_id'); // get user_id from active session
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, status, priority, user_id }), // add user_id to body
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value={0}>CREATED</option>
          <option value={1}>STARTED</option>
          <option value={2}>COMPLETED</option>
          <option value={3}>CANCELLED</option>
        </select>
      </label>
      <br />
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value={0}>LOW</option>
          <option value={1}>MEDIUM</option>
          <option value={2}>HIGH</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Todo</button>
    </form>
  );
}

export default TodoForm;
