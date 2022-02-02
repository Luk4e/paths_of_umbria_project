import React, { useEffect, useState } from 'react';
import loginService from '../Services/login';
import pathService from '../Services/pathsP';
import Notification from '../Components/Notification';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPathappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      pathService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const user = await loginService.login({
        username, password,
      });
      window.localStorage.setItem('loggedPathappUser', JSON.stringify(user));
      pathService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');

    } catch (exception) {
      setErrorMessage('Wrong credentials');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }

  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedPathappUser');
    setUser(null);
  };

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          id='username'
          type="text"
          value={username}
          name="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          id='password'
          type="password"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit" id='login-button'>login</button>
    </form>
  );

  const logoutScreen = () => (
    <>
      <h3>{user.username} logged in!</h3>
      <button type="button" onClick={handleLogout}>logout</button>
    </>
  );

  return(
    <>
      <Notification message={errorMessage} />
      {user===null ? loginForm() : logoutScreen()}
    </>
  );
};

export default Login;