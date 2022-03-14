import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Menu = () => {
    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "gatsby-icon.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 35
                    )
                }
            }
        }
    `)

    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className="navbar-brand" to='/'>
                <GatsbyImage className='rounded-circle' image={logo.childImageSharp.gatsbyImageData} alt="Logo" />
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li className='nav-item'>
                        <Link className='nav-link' activeClassName='active' activeStyle={{color: '#9963BA'}} to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' activeClassName='active' activeStyle={{color: '#9963BA'}} to="/about/">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' activeClassName='active' activeStyle={{color: '#9963BA'}} to="/contact/">Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' activeClassName='active' activeStyle={{color: '#9963BA'}} to="/gallery/">Gallery</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Menu