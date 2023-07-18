import React from 'react';
import Logo from '../components/Logo';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>Tracking</span> App</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est ut numquam, officiis perspiciatis reprehenderit soluta, quidem ipsa error inventore at qui alias. Nam cupiditate esse eligendi deleniti facilis dolorum.</p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>

        </Wrapper>
    )
}


export default Landing;
