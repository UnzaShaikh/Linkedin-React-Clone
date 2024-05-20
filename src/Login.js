import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebaseConfig';
import { useDispatch } from 'react-redux';
import { login as loginAction } from './features/counter/userSlice'; // Adjust the import based on your actual file structure

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert('Please enter a full name');
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(loginAction({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            }));
          });
      }).catch(error => alert(error.message));
  };

  const loginApp = (e) => {
    e.preventDefault();
    // Implement the login functionality here
    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(loginAction({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        }));
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="LinkedIn Logo" />
      <form onSubmit={loginApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder='Full Name (required if not signed up)'
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder='Profile URL (optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password'
        />
        <button type="submit">Sign in</button>
      </form>
      <p>
        Not a member?{" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  );
};

export default Login;
