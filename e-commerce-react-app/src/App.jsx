import Header from "./Component/Header/Header";
import About from "./Component/Header/About";
import Contact from "./Component/Header/Contact";
import Products from "./Component/Header/Products"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div>
        {/*Include the Header component*/}
        <Header/>


        {/*Define the Routes*/}
        <Routes>
          <Route path="/" element={<h1>Welcome to our website</h1>}  />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
