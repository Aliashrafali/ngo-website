import React from 'react'
import '../assets/Styles/home.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const openMenu = () =>{
        if(document.getElementById('dropdown').style.display === 'block'){
            document.getElementById('dropdown').style.display = 'none';
        }else{
            document.getElementById('dropdown').style.display = 'block';
        }
    }

  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 m-0 p-0'>
                    <div className='navbar'>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <nav>
                                <ul>
                                    <span className='text-white'>foodWallah</span>
                                    <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
                                    <li><NavLink to={'/About'} className={'nav'}>About Us</NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>Our Gallery</NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>What We Do ? </NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>Food List</NavLink></li>
                                    <li><NavLink to={'/'} className={'nav'}>Contact Us</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div style={{display:'block', float:'right'}} className='navbarbtn'>
                                <NavLink to={''} className={'navbtn btn btn-dark'} onClick={openMenu}>Join as a Doner</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='dropdown'>
                    <p className='text-white'>Anuradha</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar