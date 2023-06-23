import { NavLink, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import './style/header.scss';
import logo from './img/logo.png';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <div className="container">
      <header className="navigation">
        <nav>

          <NavLink className='nav-item' to='/'>Home Page</NavLink>
          <NavLink className='nav-item' to='/'>Home Page</NavLink>
          <NavLink className='nav-item' to='/'>Home Page</NavLink>
          <NavLink className='nav-item' to='/'>Home Page</NavLink>

          <div className='photo-wrapper'>
            <img src={logo} alt="logo" />
          </div>

          <NavLink className='nav-item' to='/'>Home Page</NavLink>
          <NavLink className='nav-item' to='/'>Home Page</NavLink>
          <NavLink className='nav-item' to='/'>Home Page</NavLink>
        </nav>

        <select name="languages" id="languages">
          <option value="lithuanian">lt</option>
          <option value="lithuanian">en</option>
        </select>

      </header>

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='*' element={
          <div>
            <h1>404 Error. Page Not Found</h1>
            <Link to='/'>Go to Home Page</Link>
          </div>
        } />

      </Routes>
    </div >
  );
}

export default App;
