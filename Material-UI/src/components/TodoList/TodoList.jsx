import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import List from '@mui/material/List';
import styles from "./TodoList.module.css";

export default function TodoList({todos}) {
  return (
    <div className={styles.container}>
    <List sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          key={todo.id}
        />
      ))}
    </List>
    </div>
  );
}
