import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = (e) => setTask(e.target.value);

  const onAddTask = () => {
    if (task) {
      setWishlist([...wishlist, task]);
      setTask('');
    }
  };

  const deleteItem = (indexToDelete) => {
    const updatedList = wishlist.filter((_, index) => index !== indexToDelete);
    setWishlist(updatedList);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Wishlist</h1>
        <p className="count">TODO Tasks : <strong>{wishlist.length}</strong></p>

        <div className="input-group">
          <input
            className="input"
            value={task}
            onChange={handleChange}
            placeholder="Enter your task"
          />
          <button className="add-button" onClick={onAddTask}>Add</button>
        </div>

        <button className="clear-button" onClick={() => setWishlist([])}>Clear All</button>

        <ul className="wishlist">
          {wishlist.map((item, index) => (
            <li key={index} className="wishlist-item">
              {item}
              <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
