import { useState } from 'react';
import axios from 'axios';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = sessionStorage.getItem('user_id');
    const now = new Date(); // create a new Date object
    const nowString = now.toString(); // convert to ISO string
    try {
      const response = await axios.post('http://localhost:3000/todos', {
        title: title,
        description: description,
        user_id: user_id,
        time: nowString,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
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
      <button type="submit">Create Todo</button>
    </form>
  );
}

export default TodoForm;
