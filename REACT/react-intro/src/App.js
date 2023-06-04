import DemoContactsPage from './pages/contacts-us/DemoContactsPage';
import DemoNewsPage from './pages/news-page/DemoNewsPage';
import './pages/news-page/style/style.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={
            <div>
              <h1>Cia yra pradinis puslapis.
                Norint patekti i projektus, ziniatinklio juostoje nurodyk kelius /contacts arba /news</h1>
            </div>
          } />
          <Route path='*' element={<h1>404 Error. Page Not Found</h1>} />
          <Route path='/contacts' element={<DemoContactsPage />} />
          <Route path='/news' element={<DemoNewsPage />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
