import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setErrorMessage('');
      console.log(data.message); // Display the success message
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message);
    }
  };

  return (
    <div className='card , top'>
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
}
