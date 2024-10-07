import './css/global.css';
import './css/tab.css';
import React from 'react';
import SignInSignUp from './components/SignInSignUp';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <SignInSignUp />
    <Footer />
  </div>
  );
}

export default App;
