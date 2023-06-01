import React, { useState } from 'react';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para autenticar al usuario
    // utilizando el email y la contraseña ingresados
    console.log('Email:', email);
    console.log('Password:', password);

    // Después de autenticar al usuario, puedes redirigirlo a otra página o realizar otras acciones
  };

  return (
    <div>
      <h3>Bienvenido</h3>
 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email/Username:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
