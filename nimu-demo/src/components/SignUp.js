import React, { useState } from 'react';
import Footer from './Footer';
import Form from './Form';
import '../css/global.css';
import axios from 'axios';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');


  const formInputs = [
    { type: 'text', placeholder: 'Name', value: name, onChange: (e) => setName(e.target.value), icon: 'fas fa-user' },
    { type: 'email', placeholder: 'örnek: isim@ornek.com', value: email, onChange: (e) => setEmail(e.target.value), icon: 'fas fa-envelope' },
    { type: 'password', placeholder: 'Password', value: password, onChange: (e) => setPassword(e.target.value), icon: 'fas fa-lock' },
    { type: 'tel', placeholder: '(000) 000-0000', value: phone, onChange: (e) => setPhone(e.target.value), icon: 'fas fa-phone' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePhoneNumber(phone)) {
      alert('Lütfen geçerli bir telefon numarası girin.');
      return;
    }

    try {
      console.log("aaa");
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
          firstName: name,
          lastName: name,
          email: email,
          password: password
      });
      console.log('Sign Up Successful:', response.data);
  } catch (error) {
      console.error('Sign Up Failed:', error);
      alert('Sign in failed, please try again.');
  }
  
    console.log('Sign Up:', { name, email, password, phone });
  };

  const validatePhoneNumber = (phoneNumber) => {
    // const regex = /^(0?5\d{2}) ?(\d{3}) ?(\d{4})$/;
    // const isValid = regex.test(phoneNumber);
    // return isValid; // Geçerli olup olmadığını döndür
    return true;
  };
    //footer linklerini tutan dizi
    const footerLinks = [
        { href: '/guest', text: 'Continue as Guest', className: 'guest-link' }
      ]; 

  return (
    <div className="signup">
        <Form inputs={formInputs} onSubmit={handleSubmit} buttonLabel="Sign Up" />
        <Footer links={footerLinks} />
    </div>
  );
};

export default SignUp;