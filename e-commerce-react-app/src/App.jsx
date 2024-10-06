import Header from "./Component/Header/Header";
import About from "./Component/Header/About";
import Contact from "./Component/Header/Contact";
import Products from "./Component/Header/Products"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from "./Component/Body/Body";

function App() {
  
  return (
    <Router>
      <div>
        {/*Include the Header component*/}
        <Header/>
        <Body/>


        {/*Define the Routes*/}
        <Routes>
          <Route path="/" />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
