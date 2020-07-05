import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a3564'
    },
    secondary: {
      main: '#ff0000'
    },
    text: {
      primary: '#ddd',
      secondary: '#333',
      linkHover: '#eef7f4',
      linkSelected: '#61dafb'
    },
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme = { theme }>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
