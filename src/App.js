// import logo from './logo.svg';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <div className="header">Title</div>
      <main>
        <Outlet />
      </main>
      <div className="footer">Footer</div>
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
  let navigate = useNavigate();
  return (
    <>
      <main>
        <h2>About Us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, delectus.
        </p>
      </main>
      <nav>
        <input type="button" value="Home" onClick={(e)=>{
          navigate("/")
        }} />
        {/* <Link to="/">Home</Link> */}
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
