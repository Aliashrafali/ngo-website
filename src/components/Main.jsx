import React from 'react';
import Donate from '../assets/images/donate.jpg';

const Main = () => {
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
    </>
  )
}

export default Main