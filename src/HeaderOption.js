import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
const HeaderOption = ({avatar, title, Icon , onClick}) => {
  const user =  useSelector(selectUser);
  return (
    <div onClick={onClick}className='headerOption'>
    {Icon && <Icon className='headerOption__icon' />}
    {avatar && (
        <Avatar className='headerOption__icon' src={user?.photoUrl}>
            {user?.email[0]}
        </Avatar>
    )}
    <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
