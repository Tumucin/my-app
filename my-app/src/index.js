import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}

ReactDOM.render(<BasicTextFields />, document.getElementById("App"));
