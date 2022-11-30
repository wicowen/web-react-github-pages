// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App - React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Index</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, amet.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>About Us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, delectus.
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function NotFound() {
  return (
    <>
      <main>
        <h2>404</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
