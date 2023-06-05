import DemoContactsPage from './src/pages/contacts-us/DemoContactsPage';
import DemoNewsPage from './src/pages/news-page/DemoNewsPage';
import './pages/news-page/style/style.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav>
          <NavLink className='nav-item' to="/">Home</NavLink>
          <NavLink className='nav-item' to="/contacts">Contacts Page</NavLink>
          <NavLink className='nav-item' to="/news">News Page</NavLink>
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
        </Routes>

      </header>
    </div>
  );
}

export default App;


