import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Form from './Form';
import '../css/global.css';

const SignIn = () => {
    //kullanıcı giriş bilgileri için değişken oluşturma
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //form submitlendiğinde çalışacak olan fonksiyon
    const handleSubmit = async (e) => {
        e.preventDefault();//form gönderildiğinde sayfanın yenilenmesini önler
        if (!email || !password) {
            alert("Both fields are required!");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                email: email,
                password: password
            });
            console.log('Sign In Successful:', response.data);
        } catch (error) {
            console.error('Sign In Failed:', error);
            alert('Sign in failed, please try again.');
        }
        console.log('Sign In:', { email, password });
    };
    

    //kullanıcı giriş bilgilerini tutmak için formInputs adında bir dizi oluşturuldu, içerisine email ve şifre nesneleri kondu.
    const formInputs = [
        { type: 'email', placeholder: 'Email', value: email, onChange: (e) => setEmail(e.target.value), icon: 'fas fa-envelope' },
        { type: 'password', placeholder: 'Password', value: password, onChange: (e) => setPassword(e.target.value), icon: 'fas fa-lock' }
      ];
  
    //footer linklerini tutan dizi
    const footerLinks = [
        
        { href: '/guest', text: 'Continue as Guest', className: 'guest-link' },
    
        
      ]; 
    
    return (
      <div className="signin dark-background">
        
        <Form inputs={formInputs} onSubmit={handleSubmit} buttonLabel="Sign In" />

        <p className='forgot-psw'>Forgot password?</p>

        <Footer links={footerLinks} />
      </div>
    );
  };
  
  export default SignIn;