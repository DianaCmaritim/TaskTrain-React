import React, { useState } from 'react';
function EditTodoForm(props) {
    const [title, setTitle] = useState(props.todo ? props.todo.title : '');
    const [description, setDescription] = useState(props.todo ? props.todo.description : '');
    const [status, setStatus] = useState(props.todo ? props.todo.status : '');
    const [priority, setPriority] = useState(props.todo ? props.todo.priority : '');

    // Rest of the code...
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/todos/${props.todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': props.csrfToken // Include CSRF token in headers to prevent CSRF attacks
        },
        body: JSON.stringify({
          title: title,
          description: description,
          status: status,
          priority: priority
        })
      });
      const data = await response.json();
      if (response.ok) {
        props.onSuccess(data);
      } else {
        props.onError(data.message);
      }
    } catch (error) {
      props.onError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="CREATED">Created</option>
          <option value="STARTED">Started</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>
      <div>
        <label htmlFor="priority">Priority:</label>
        <select id="priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditTodoForm;
