import React from 'react';
import '../assets/Styles/home.css';
import { NavLink } from 'react-router-dom';

const Slider = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 m-0 p-0'>
                    <div className='slider'>
                        <div className='slider-caption'>
                            <h1>Empowering Change,One Step at a Time</h1>
                            <p>
                                Together, we fight hunger, educate, and protect <br></br> our planet
                            </p>
                            <NavLink to={''} className={'slider-btn btn btn-dark'}>Be a Doner</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Slider