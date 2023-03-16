import React, { useEffect, useState } from 'react';
import loginService from '../Services/login';
import pathService from '../Services/paths';
import Notification from '../Components/Notification';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPathappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      pathService.setToken(user.token);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    try{
      const user = await loginService.login({
        username, password,
      });
      window.localStorage.setItem('loggedPathappUser', JSON.stringify(user));
      pathService.setToken(user.token);
      setUser(user);
      setMessage(`Welcome ${user.username}`);
      setTimeout(() => {
        setMessage(null);
      },1000);
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
    <div>
      <h2> Login </h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            id='username'
            type="text"
            value={username}
            name="username"
            onChange={({ target }) => setUsername(target.value)}
          />
          <Form.Label>Password:</Form.Label>
          <Form.Control
            id='password'
            type="password"
            value={password}
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button variant="success" type="submit" id='login-button'>login</Button>
        </Form.Group>
      </Form>
    </div>
  );

  const logoutScreen = () => (
    <>
      <h3>{user.username} logged in!</h3>
      <button type="button" onClick={handleLogout}>logout</button>
    </>
  );

  return(
    <>
      {(message && <Alert variant ="success">{message}</Alert>)}
      <Notification message={errorMessage} />
      {user===null ? loginForm() : logoutScreen()}
    </>
  );
};

export default Login;