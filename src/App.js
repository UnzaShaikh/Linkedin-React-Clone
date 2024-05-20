import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector , useDispatch } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice'; // Correct import statement
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebaseConfig';
import Widgets from './Widgets';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else{
        // Logged out
        dispatch(logout({}))
      }
    })
  }, []); // Invoking the selector function
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;

