import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import {Notifications, BusinessCenter, Chat, SupervisorAccount } from '@mui/icons-material';
import { logout } from './features/counter/userSlice';
import { auth } from './firebaseConfig';
import { useDispatch } from 'react-redux';

const Header = () => {
  
const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className="header__left">
        <img src="./images/Linkedinlogo.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" placeholder='Search' />
        </div>
      </div>
      <div className="header__right"></div>
        <HeaderOption title={'Home'} Icon={HomeIcon}/>
        <HeaderOption title={'My Network'} Icon={SupervisorAccount}/>
        <HeaderOption title={'Jobs'} Icon={BusinessCenter}/>
        <HeaderOption title={'Messeaging'} Icon={Chat}/>
        <HeaderOption title={'Notifications'} Icon={Notifications}/>
        <HeaderOption
          title={'me'}
          onClick={logoutOfApp}
          avatar={true}
          />
    </div>
  )
}

export default Header
