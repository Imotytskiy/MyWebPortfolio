import React from "react";
import DelButton from "../DelButton/DelButton";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/store";
import Checkbox from '@mui/material/Checkbox';
import { ListItem, ListItemIcon, ListItemButton, IconButton } from "@mui/material";
import styles from './TodoItem.module.css'

export default function TodoItem({ todo, index}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <ListItem
      onClick={handleClick}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <DelButton todo={todo} />
        </IconButton>
      }
      disablePadding 
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            checked={todo.completed}
            color="secondary"
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </ListItemIcon>
        <span
          className={
            todo.completed ? styles.inputTextCrossed : styles.inputText
          }
        >
          <b>{index + 1}.&ensp; </b>{todo.title}
        </span>
      </ListItemButton>
    </ListItem>
  );
}
