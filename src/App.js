
// import './App.css';
import React from 'react'
import Router from "./pages/Router";
import Footer from "./pages/Footer";
import './pages/footer.css';
import './pages/home.css';
import './pages/Login/login.css';
import 'react-toastify/dist/ReactToastify.css';
import './Style/services.css'
import './Style/contact.css'
import './Style/Tranning.css'
import './Style/Career.css'
import './Style/Portfolio.css'

function App() {

  return (
    
    <div  className="App">
    
       
      <Router/>
     <Footer/>
      
    </div>
    
  );
}

export default App;
