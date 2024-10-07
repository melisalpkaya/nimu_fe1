import React, { useState, useEffect, useRef} from 'react';
import Header from './Header';
import '../css/tab.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInSignUp = () => {
  const [activeTab, setActiveTab] = useState('signIn'); // Başlangıçta signIn aktif
  const markerRef = useRef(null);
  const signInButtonRef = useRef(null);
  const signUpButtonRef = useRef(null);

  // Marker'ı pozisyonlamak için 
  useEffect(() => {
    const marker = markerRef.current;
    const activeButton = activeTab === 'signIn' ? signInButtonRef.current : signUpButtonRef.current;
    
    if (marker && activeButton) {
      marker.style.left = `${activeButton.offsetLeft}px`;
      marker.style.width = `${activeButton.offsetWidth}px`;
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const footerLinks = [
    { href: '/guest', text: 'Continue as Guest' }
  ]; 
  return (
    <div className="signin-signup dark-background">
      <Header />
      <div className="tabs">
        <div id="marker" ref={markerRef}></div>
        <button
          ref={signInButtonRef}
          className={activeTab === 'signIn' ? 'active' : ''}
          onClick={() => handleTabClick('signIn')}
        >
          Sign In
        </button>
        <button
          ref={signUpButtonRef}
          className={activeTab === 'signUp' ? 'active' : ''}
          onClick={() => handleTabClick('signUp')}
        >
          Sign Up
        </button>
      </div>

      <div className="form-container">
        {activeTab === 'signIn' && <SignIn />}
        {activeTab === 'signUp' && <SignUp />}
      </div>

      
    </div>
  );
};

export default SignInSignUp;
