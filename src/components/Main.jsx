import React, { useState } from 'react';
import Donate from '../assets/images/donate.jpg';
import { NavLink } from 'react-router-dom';
import Food from './Food';

const Main = () => {

    const [food] = useState(Food);

  return (
    <>
        <section>
            <div className='container mt-5 mb-5'>
                <h4 className='text-center text-white'>About Us</h4>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <p style={{textAlign:'justify', color:'#EEE'}}>
                            What started with a simple idea — that food should nourish people, not landfills — has evolved into a larger mission to uplift our community. Beyond food donations, we work tirelessly to educate the public on waste reduction, organize tree plantation drives, cleanliness campaigns, and ensure the safety of animals.
                            <br></br><br></br>
                            We believe in the power of collective action and encourage people from all walks of life to join us in creating a more compassionate, sustainable world. Together, we can fight hunger, protect the environment, and build a better future for everyone.
                            We believe in the power of collective action and encourage people from all walks of life to join us in creating a more compassionate, sustainable world. Together, we can fight hunger, protect the environment, and build a better future for everyone.
                            We believe in the power of collective action and encourage people from all walks of life to join us in creating a more compassionate, sustainable world. Together, we can fight hunger, protect the environment, and build a better future for everyone.
                            We believe in the power of collective action and encourage people from all walks of life to join us in creating a more compassionate, sustainable world. Together, we can fight hunger, protect the environment, and build a better future for everyone.
                        </p>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img src={Donate} alt={Donate} height={'300px'} width={'100%'}></img>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container mt-4 mb-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='ngo'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='first-icons'>
                                        <i class="fas fa-users"></i> <span>800,000+ people fed</span>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='first-icons'>
                                        <i class="fas fa-headphones-alt"></i> <span>24 X 7 Customer support</span>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-12'>
                                    <div className='first-icons'>
                                        <i class="fas fa-medal"></i> <span>ISO Certified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className='container mt-5 mb-5'>
                <h4 className='text-white text-center'>Our Services</h4>
                <div className='row'>
                    {
                        food.map((item) =>{
                            return(
                                <div className='col-lg-3 col-md-3 col-sm-12 mt-3'>
                                    <div className='testemonials-card'>
                                        <div className='img'>
                                            <img src={item.img} alt={item.img} height={'200px'} width={'100%'}></img>
                                        </div>
                                        <h6 className='text-center pt-3'>{item.name}</h6>
                                        <p className='text-center'>{item.desc}</p>
                                        <div style={{display:'block', textAlign:'center'}}>
                                            <NavLink to={''}><button className='btn btn-warning'>{item.btn}</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Main