
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';

import TodoList from "./components/TodoList/TodoList";
import ButtonAdd from "./components/Button/Button";
import { addTodo, delTodo } from "./store/store";
import { lightTheme, darkTheme } from "./theme/afterdark";

function App() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  const buttonClick = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const unique_id = uuid();
    const newTodo = {
      id: unique_id.slice(0, 8),
      completed: false,
      title: inputValue,
    };

    dispatch(addTodo(newTodo));
    setInputValue("");
  };

  const buttonDelClick = (id) => {
    dispatch(delTodo(id));
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <div className='switcher'>
  ДЕНЬ
  <Switch
    checked={isDarkMode}
    onClick={() => setIsDarkMode(!isDarkMode)}
  /> 
  НІЧ
</div>
      <CssBaseline />
      <div>
        <ButtonAdd
          buttonClick={buttonClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div className="wrapper">
        <h1>todo-list</h1>
        <TodoList todos={todos} buttonDelClick={buttonDelClick} />
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
