import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import BookList from './components/BooksList';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <NavLink style={{ marginRight: 10 }} to="/">Home</NavLink>
          <NavLink style={{ marginLeft: 10 }} to="/Book">Book</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/Book' element={<BookList />}></Route>
          <Route path='/*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
