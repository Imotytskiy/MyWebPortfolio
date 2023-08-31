import React from "react";
import styles from "./Button.module.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const ButtonAdd = ({ buttonClick, inputValue, setInputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.container}>
  <TextField 
    className={styles.inputStyle}
    type="text" 
    value={inputValue}
    onChange={handleChange}
  />
  <Button 
    style={{ marginLeft: '10px' }}
    size="large"  
    variant="contained" 
    onClick={buttonClick}
  >
    СПРАВА
  </Button>
</div>
  );
};

export default ButtonAdd;
