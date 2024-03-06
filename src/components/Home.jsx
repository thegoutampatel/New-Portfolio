import React from 'react';
import './Home.css';
import myimg from '../assets/images/me.jpg'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id="home">
      <div class="animation-area">
        <ul class="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="home-content">
        <div className="home--text">
          <p className='font-semibold text-7xl mb-5'>Hi, I'm Goutam</p>
          <div className='flex gap-2'>
            <p>I am a </p>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                ' Front-End Developer', // initially rendered starting point
                1000,
                ' Back-End Developer',
                1000,
                ' Full-Stack Developer',
                1000,
                ' Web Developer',
                500,
              ]}
              speed={50}
              style={{ fontSize: '1em', color: '#ff5722'}}
              repeat={Infinity}
           />
          </div>
          <button>Contact Me</button>
        </div>
        <div className="home--image">
          <img src={myimg} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
