import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'

const Menu = () => {
    const navLinks = [
        { lable: 'Home', icon: 'home', path: '/' },
        { lable: 'Message', icon: 'near_me', path: '/message' },
        { lable: 'Discover', icon: 'explore', path: '/discover' },
        { lable: 'Notify', icon: 'favorite', path: '/notify' },
    ]

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    
    const isActive = (pn) => {
        if (pn === pathname) return 'active'
    }

  return (
    <div className="menu">
        <ul className="navbar-nav flex-row">
            {
                navLinks.map((link, index) => (
                    <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                        <Link className="nav-link" to={link.path}>
                            <span className="material-icons">{link.icon}</span>
                        </Link>
                    </li>
                ))
            }

         