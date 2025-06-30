import React from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import Main from './Main';

const Home = () => {
  return (
    <>
       <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 p-0 m-0'>
                    <Navbar />
                    <Slider />
                    <Main />
                </div>
            </div>
       </div>
    </>
  )
}

export default Home