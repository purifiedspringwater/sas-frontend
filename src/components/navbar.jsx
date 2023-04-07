import React from 'react'
import logo from '../assets/logo.svg'
import {ImStatsDots} from 'react-icons/im'
import {MdMessage} from 'react-icons/md'
import {HiClipboardList} from 'react-icons/hi'
import {BiLogOut} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {IoMdSettings} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import Stat from './absence'

import { NavLink } from 'react-router-dom'


export default function navbar() {

  return (
    <div className="navbar">
        <img src={logo} alt="logo" style={{width: 300 + 'px'}}/>
        <div className="profile admin">
            <i><FaUserCircle/></i>
            <div className='title'>
                <h3 className="name">Aslan Abenov</h3>
                <p className="status">Student</p>
            </div>
        </div>
        <div className="menu">
          <NavLink to={'/'}><AiFillHome/>    MainPage</NavLink>
          <NavLink to={'/statistics'}><ImStatsDots/>    Statistics</NavLink>
          <NavLink to={'/messages'}><MdMessage/>    Messages</NavLink>
          <NavLink to={'/reason'}><HiClipboardList/>    Absence Reason</NavLink>
          <NavLink to={'/settings'}><IoMdSettings/>    Settings</NavLink>
          <NavLink to={'/login'} style={{color : '#ff0000'}}><BiLogOut/>    Log out</NavLink>
        </div>
    </div>
  )
}


