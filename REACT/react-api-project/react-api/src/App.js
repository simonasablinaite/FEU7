import UsersPage from "./pages/UsersPage/UsersPage";
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './style/navigation.css';

function App() {
  return (
    <div className="container">
      <div className="navigation">
        <nav>
          <NavLink className='nav-item' to='/user-page'>User Page</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path='*' element={
          <div>
            <h1>404 Error. Page Not Found</h1>
            <Link to='/'>Go to User page</Link>
          </div>
        } />
        <Route path='/' element={<UsersPage />} />

      </Routes>
    </div >


  );
}

export default App;
