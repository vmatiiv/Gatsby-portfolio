import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-scroll';
import {FaHamburger} from 'react-icons/fa'
import {Container} from 'react-bootstrap'

function Nav({nav}) {

    const [scroll,setScroll] = useState(null);
    const [fixed,setFixed] = useState(null);
  
    useEffect(()=>{
      const tar = () => {
        if(scroll && window.scrollY>scroll) {
          setFixed(true);
        }
        else setFixed(false);
      };
      window.addEventListener('scroll',tar) 
      return ()=> window.removeEventListener('scroll',tar)
    })
    const navbar = useRef(null);
    const links = useRef(null);
    useEffect(()=>{
      setScroll(navbar.current.getBoundingClientRect().top+ window.scrollY)
    },[navbar])

    const onClick = (e) =>{
      links.current.classList.toggle('show');
    }
    const hide = (e) =>{
      links.current.classList.remove('show');
    }
    return (

            <nav ref={navbar} className={fixed ? 'nav fixed' : 'nav relative'}>
              <Container >
                <div className="nav__contant" >
                    <Link role="button" onClick={hide} activeClass='none' to="header" className="nav__logo"  duration={500} smooth={true} >{nav.logo || 'Logo'}</Link>
                    <button onClick={onClick} className='nav__button'><FaHamburger role="button" aria-label="Open menu"/></button>
                    <div   ref={links} className="nav__links">
                        <ul className='nav__ul'>
                          <li>
                            <Link onClick={hide} activeClass="nav__item--active" to="header" className="nav__item" spy={true} duration={500} smooth={true} >header</Link>
                          </li>
                          <li>
                            <Link onClick={hide} activeClass="nav__item--active" to="about"  className="nav__item" spy={true} duration={500} smooth={true} offset={-50}>about</Link>
                          </li>
                          <li>
                            <Link onClick={hide} activeClass="nav__item--active" to="technologies"  className="nav__item" spy={true} duration={500} smooth={true} offset={-50}>technologies</Link>
                          </li>
                          <li>
                            <Link onClick={hide} activeClass="nav__item--active" to="projects"  className="nav__item" spy={true} duration={500} smooth={true} offset={-50}>projects</Link>
                          </li>
                          <li>
                            <Link onClick={hide} activeClass="nav__item--active" to="contact"  className="nav__item" spy={true} duration={500} smooth={true} offset={-50}>contact</Link>
                          </li>

                        </ul>
                    </div>
                </div>
              </Container>

            </nav>

    )
}

export default Nav
