import DemoContactsPage from './pages/contacts-us/DemoContactsPage';
import DemoNewsPage from './pages/news-page/DemoNewsPage';
import './pages/news-page/style/style.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Counter from './pages/Counter/Counter';
import ShoppingList from './pages/Shop-list/ShoppingList';
import TodoPage from './pages/Todo-list/TodoPage';
import './App.css'


function App() {
  return (
    <div className="main-content">
      <nav>
        <NavLink className='nav-item' to="/">Home</NavLink>
        <NavLink className='nav-item' to="/contacts">Contacts Page</NavLink>
        <NavLink className='nav-item' to="/news">News Page</NavLink>
        <NavLink className='nav-item' to="/counter">Counter Page</NavLink>
        <NavLink className='nav-item' to='/shopping-list'>Shopping list Page</NavLink>
        <NavLink className='nav-item' to="/todo">Todo list Page</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={
          <div>
            <h1 className='app-title'>Cia yra pradinis puslapis.</h1>
          </div>
        } />
        <Route path='*' element={
          <div>
            <h1>404 Error. Page Not Found</h1>
            <Link to='/'>Go to home page</Link>
          </div>
        } />
        <Route path='/contacts' element={<DemoContactsPage />} />
        <Route path='/news' element={<DemoNewsPage />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/shopping-list' element={<ShoppingList />} />
        <Route path='/todo' element={<TodoPage />} />

      </Routes>
    </div>
  )
}

export default App;
