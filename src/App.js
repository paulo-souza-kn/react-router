import './App.css';

//config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//Components
import NavBar from './components/NavBar.js';
import SearchForm from './components/SearchForm.js';

//Pages
import Home from './pages/Home';
import About from './pages/About'
import Products from './pages/Products.js';
import Info from "./pages/Info";
import NotFound from "./pages/NotFound.js"
import Search from './pages/Search.js';


function App() {
  return (
    <div className="App">
        <h1>
          React Router
        </h1>
        <BrowserRouter>
          <NavBar />
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products/:id" element={<Products />}></Route>
            <Route path="/products/:id/info" element={<Info />} />
            <Route path="/search" element={<Search />} />
            <Route path="/company" element={<Navigate to="/About" />} /> 
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
