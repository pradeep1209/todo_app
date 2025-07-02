import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [filter, setFilter] = useState('all'); // all, completed, pending

  const addtodo = () => {
    if (todo.trim() === '') return;
    setTodolist([...todolist, { id: Date.now(), text: todo, completed: false }]);
    setTodo('');
  };

  const handleCheckbox = (index) => {
    const updatedList = [...todolist];
    updatedList[index].completed = !updatedList[index].completed;
    setTodolist(updatedList);
  };

  const clearAll = () => {
    setTodolist([]);
  };

  const filteredList = todolist.filter((item) => {
    if (filter === 'completed') return item.completed;
    if (filter === 'pending') return !item.completed;
    return true; // 'all'
  });

  return (
    <div className="app-wrapper">
      {/* Left: Add task */}
      <div className="left-box">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="add-btn" onClick={addtodo}>
            Add
          </button>
        </div>
      </div>

      {/* Right: Task list + filters */}
      <div className="right-box">
        <h2>Your Tasks</h2>
        <ul>
          {filteredList.map((item, index) => (
            <li key={item.id} className={`todo-item ${item.completed ? 'completed' : ''}`}>
              <span>{item.text}</span>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckbox(index)}
              />
            </li>
          ))}
        </ul>

        {todolist.length > 0 && (
          <>
            <button className="clear-btn" onClick={clearAll}>Clear All</button>
            <div className="filter-btns">
              <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
              <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
              <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
