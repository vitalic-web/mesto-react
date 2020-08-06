import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
