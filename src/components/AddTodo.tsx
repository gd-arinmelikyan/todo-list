import React, { useRef } from 'react';

import './AddTodo.css';

type NewItemProps = {
  onAddNewItem: (todoText: string) => void;
};

const AddTodo: React.FC<NewItemProps> = ({ onAddNewItem }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddNewItem(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD NEW TASK</button>
    </form>
  );
};

export default AddTodo;