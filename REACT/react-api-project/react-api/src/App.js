import UsersPage from "./pages/UsersPage/UsersPage";
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './style/navigation.css';
import UserPage from "./pages/UsersPage/UserPage/UserPage";
import PostsPage from "./pages/PostsPage/PostsPage";

function App() {
  return (
    <div className="container">
      <div className="navigation">
        <nav>
          <NavLink className='nav-item' to='/users'>Users Page</NavLink>
          <NavLink className='nav-item' to='/posts'>Posts Page</NavLink>

        </nav>
      </div>

      <Routes>
        <Route path='/' element={
          <h1>Home page</h1>
        } />

        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/posts' element={<PostsPage />} />

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
