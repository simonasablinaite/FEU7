import DemoContactsPage from './pages/contacts-us/DemoContactsPage';
import DemoNewsPage from './pages/news-page/DemoNewsPage';
import './pages/news-page/style/style.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Counter from './pages/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav>
          <NavLink className='nav-item' to="/">Home</NavLink>
          <NavLink className='nav-item' to="/contacts">Contacts Page</NavLink>
          <NavLink className='nav-item' to="/news">News Page</NavLink>
          <NavLink className='nav-item' to="/counter">Counter Page</NavLink>

        </nav>

        <Routes>
          <Route path='/' element={
            <div>
              <h1>Cia yra pradinis puslapis.
                Norint patekti i projektus, ziniatinklio juostoje nurodyk kelius /contacts arba /news</h1>
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

        </Routes>
      </header>
    </div>
  );
}

export default App;
