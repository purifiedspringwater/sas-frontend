import React from 'react'
import logo from '../logo.svg'
import '../styles/navbar.css'
import {ImStatsDots} from 'react-icons/im'
import {MdMessage} from 'react-icons/md'
import {HiClipboardList} from 'react-icons/hi'
import {BiLogOut} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {IoMdSettings} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'


export default function navbar() {


  
  return (
    <div className="navbar">
        <img src={logo} alt="logo" style={{width: 300 + 'px'}}/>
        <div className="profile">
            <i><FaUserCircle/></i>
            <div className='title'>
                <h3 className="name">Aslan Abenov</h3>
                <p className="status">Student</p>
            </div>
        </div>
        <div className="menu">
            <a href="" className='active'><AiFillHome/>    MainPage</a>
            <a href=""><ImStatsDots/>    Statistics</a>
            <a href=""><MdMessage/>    Messages</a>
            <a href=""><HiClipboardList/>    Absence Reason</a>
            <a href=""><IoMdSettings/>    Settings</a>
            <a href="" style={{color : '#ff0000'}}><BiLogOut/>    Log out</a>
        </div>
    </div>
  )
}


