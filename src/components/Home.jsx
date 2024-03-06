// import React from 'react'
// import './Home.css'
// const Home = () => {
//   return (
//     <section id="home">
//         <div className="animation-area absolute w-full h-screen top-0 bottom-0 z-[-10]">
//           <ul className="box-area absolute top-0 left-0 w-full h-full overflow-hidden">
          
//             <li className="box1 absolute block list-none bg-orange-300 bg-opacity-40 w-20 h-20 left-86 bottom-[-150px] animate animate-linear infinite z-[-10]"></li>
//             <li className="box2 absolute block list-none bg-orange-300 bg-opacity-40 w-10 h-10 rounded-full left-12 bottom-[-150px] animate-delay-1500 animate-duration-10000 animate animate-linear infinite z-[-10]"></li>
//             <li className="box3 absolute block list-none bg-orange-300 bg-opacity-40 w-40 h-40 left-70 bottom-[-150px] animate-delay-5500 animate animate-linear infinite z-[-10]"></li>
//             <li className="box4 absolute block list-none bg-orange-300 bg-opacity-40 w-60 h-60 left-42 bottom-[-150px] animate-delay-0 animate-duration-15000 animate animate-linear infinite z-[-10]"></li>
//             <li className="box5 absolute block list-none bg-orange-300 bg-opacity-40 w-20 h-20 rounded-full left-65 bottom-[-150px] animate-delay-0 animate animate-linear infinite z-[-10]"></li>
//             <li className="box6 absolute block list-none bg-orange-300 bg-opacity-40 w-30 h-30 left-15 bottom-[-150px] animate-delay-3500 animate animate-linear infinite z-[-10]"></li>
//           </ul>
//       </div>
//       <div class="home-content">
//         <div class="home--text">
//           <p>I'm</p>
//           <h1>Goutam Patel,</h1>
//           <p>A Frontend <span>Developer</span></p>
//         </div>
//         <div class="home--image">
//           <img src="./Images/me.jpg" alt="profile" />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Home



import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div class="animation-area">
        <ul class="box-area">
          <li class="box1"></li>
          <li class="box2"></li>
          <li class="box3"></li>
          <li class="box4"></li>
          <li class="box5"></li>
          <li class="box6"></li>
        </ul>
    </div>
      <div className="home-content">
        <div className="home--text">
          <p>I'm</p>
          <h1>Goutam Patel,</h1>
          <p>A Frontend <span>Developer</span></p>
        </div>
        <div className="home--image">
          {/* <img src="./Images/me.jpg" alt="profile" /> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
