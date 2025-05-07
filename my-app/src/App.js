import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  const [links, setLinks] = useState(["one","two","three"]);
  const [hrefs, setHrefs] = useState(["/index","/products","/contact"])
  return (
    <div className="App">
      <Navbar links={links} hrefs={hrefs} />
    </div>
  );
}

export default App;
