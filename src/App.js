import './css/App.css';
import Footer from './Footer';
import Seoul from './seoul';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (

<BrowserRouter>
    <Routes>
    {/* <Route path="/" /> */}
    <Route path="/" element={<Seoul />}  />
    </Routes>
  <Footer/>
</BrowserRouter> 
  );
}

export default App;
