import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import BookList from './components/BooksList';
import PageNotFound from './components/PageNotFound';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import Form from './components/Form';

function App() {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            backgroundColor: 'red',
            '&:hover': {
              background: "green",
            },
          },
        },
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink style={{ marginLeft: 10 }} to="/Book">Book</NavLink>
            <NavLink style={{ marginLeft: 10 }} to="/Form">Form</NavLink>
          </div>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/Book' element={<BookList />}></Route>
            <Route path='/Form' element={<Form />}></Route>
            <Route path='/*' element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
