import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
    items: { id: string; text: string }[];
    onDeleteItem: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteItem }) => {
    return (
        <ul>
            {items.map(item => (
                <TodoItem
                    key={item.id}
                    item={item}
                    onDeleteItem={onDeleteItem}
                />
            ))}
        </ul>
    )
}

export default TodoList;