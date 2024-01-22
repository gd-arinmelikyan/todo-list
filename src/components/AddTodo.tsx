import React, { useRef, useState } from 'react';

import './AddTodo.css';

interface NewItemProps {
  onAddNewItem: (todoText: string) => void;
};

const AddTodo: React.FC<NewItemProps> = ({ onAddNewItem }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (!enteredText.trim()) {
      setError('Please enter a valid text.');
      return;
    }
    setError(null);
    onAddNewItem(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">ADD NEW TASK</label>
        <input type="text" id="todo-text" ref={textInputRef} />
        {error && <div className="error-message">{error}</div>}
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default AddTodo;