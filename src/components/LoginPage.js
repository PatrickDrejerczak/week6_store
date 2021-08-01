import React from 'react';
import { useState } from 'react';
import LoginForm from './LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log('Logged in!');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError('Details do not match!');
    }
  };

  const Logout = () => {
    setUser({ name: '', email: '' });
  };
  return (
    <div>
      {user.email != '' ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default LoginPage;