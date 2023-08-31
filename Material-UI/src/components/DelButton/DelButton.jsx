import React from "react";
import { useDispatch } from "react-redux";
import { delTodo } from "../../store/store";
import Button from '@mui/material/Button'; 

export default function DelButton({ todo }) {
  const dispatch = useDispatch();

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    dispatch(delTodo(todo.id));
  };


  return (
    <>
      <Button variant="outlined" color="error" onClick={handleDeleteClick}>
        ВИДАЛИТИ
      </Button>
    </>
  );
}
