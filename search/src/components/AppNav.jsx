import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// using the prop homepage (default set to false) we can tell our AppNav
// to return the condensed navbar or the full navbar depending on which page we are on
export default function AppNav({ homepage = false, name }) {
    // Need to create 2 refs, 1 for the menu and one for the navburger
    const menuRef = React.createRef()
    const burgerRef = React.createRef()

    // now get the location of the user, if we are on the homepage we will return nothing
    // on any other page we will return the full page
    const location = useLocation()

    // callback function to toggle the navburger menu
    const handleMenuToggle = ev => {
        menuRef.current.classList.toggle('is-active')
        burgerRef.current.classList.toggle('is-active')
    }

    // check if we are not on the homepage (by the homepage prop) and if we are
    // on the homepage path ('/') if so return nothing
    if (!homepage && location.pathname === '/') return null

    // function to create an element for each category in the navbar 
    // that contains the icon and name contained in spans
    const createLabel = (name, icon) => (
        <>
            <span className="icon">
                <i aria-hidden="true" className={icon}></i>
            </span>
            <span className="">{name}</span>
        </>
    )

    // function to create jsx elemnts for Links and NavLinks based on the 
    // supplied label array and nameArray, made to easily add more routes later on
    const createLinks = (labelArray, nameArray) => {
        const navLinks = []
        const links = []

        // for each label in the labelArray lets create a NavLink element
        // using the corresponding name and push it to the navLinks Array
        labelArray.forEach((label, index) => {
            navLinks.push((
                <NavLink
                    className='navbar-item'
                    to={`${nameArray[index]}`}
                    onClick={handleMenuToggle}
                    key={`${index}-${label}`}
                >
                    {label}
                </NavLink>
            ))
        })

        // same as above but for regular links
        labelArray.forEach((label, index) => {
            links.push((
                <li>
                    <Link to={`${nameArray[index]}`} key={`${index}-${label}`}>{label}</Link>
                </li>
            ))
        })

        return [navLinks, links]
    }

    // using the above function create a label for each category
    const paths = {
        labels: [
            createLabel('Home', 'fas fa-search'),
            createLabel('Saved', 'fas fa-save'),
        ],
        routes: [
            '/search',
            '/search/saved',
        ]
    }

    const [navbarLinks, homepageLinks] = createLinks(paths.labels, paths.routes)

    return homepage
        ? (
            // the condensed version of the navbar to appear of homepage
            <nav className='tabs is-boxed is-fullwidth'>
                <div className='container'>
                    <ul>
                        {homepageLinks}
                    </ul>
                </div>
            </nav>
        ) : (
            // The full version of the navbar to appear on normal pages
            <nav className='navbar is-info is-fixed-top' role='navigation' aria-label='main navigation'>
                {/* Navbar Brand -  Logo and title should go here */}
                <div className='navbar-brand'>
                    <a href='/' className='navbar-item'>
                        <div className="title">Search-App</div>
                    </a>
                    {/* The Navbar burger menu */}
                    <button
                        className='navbar-burger'
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navmenu'
                        ref={burgerRef}
                        onClick={handleMenuToggle}
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </button>
                </div>
                {/* The Navbar Menu containing links in the end (right)*/}
                <div className='navbar-menu' id='navmenu' ref={menuRef}>
                    <div className='navbar-end'>
                        {navbarLinks}
                    </div>
                </div>
            </nav>
        )
}
