import React from 'react';
import './TodoItem.css';

interface TodoItemProps {
    item: { id: string, text: string };
    onDeleteItem: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDeleteItem}) => {
    return (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={onDeleteItem.bind(null, item.id)}>
            Delete
          </button>
        </li>
    )
}

export default TodoItem;
