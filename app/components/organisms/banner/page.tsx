"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Dynamically import the OwlCarousel component with SSR disabled
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Banner = () => {
  return (
    
    <OwlCarousel loop={true}
    items={1}
    responsiveRefreshRate={0}
    autoplay={true}
    autoplayTimeout={4000}
    // autoplayHoverPause={true}
    autoplaySpeed={1000}
fluidSpeed={true}
    nav={true}
    navText={[
      "<i class='icon-arrow-prev'></i>",
      "<i class='icon-arrow-next'></i>"
    ]}
    dots={false}
    className="owl-theme" >
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://resources.smartbizloans.com/hubfs/SmartBiz%20Blog/duns-number.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          <h1 className="text-white text-4xl font-bold animate-fadeIn mb-6 text-center">Welcome Elite Business Solutions</h1>
          <p className="text-sm text-white text-center w-2/3 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nobis. Tempora sunt sapiente tempore dicta praesentium maxime, quia consequatur, ea dolor quas amet quo ad debitis aspernatur nulla est at! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae at, asperiores soluta rerum sit! Illo adipisci aut magnam est possimus distinctio facilis recusandae voluptates, optio suscipit odit dolorem rerum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, mollitia necessitatibus enim eligendi ea, ab reprehenderit perspiciatis fugiat ut aliquam eum aperiam doloribus obcaecati iste sequi impedit quia sunt.
          </p>
          <button className="text-blue-900 bg-white px-4 py-2 hover:bg-blue-900 hover:text-white transition-all">Book Now</button>
        </div>
      </div>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          <h1 className="text-white text-4xl font-bold animate-fadeIn mb-6 text-center">Another Slide Title</h1>
          <p className="text-sm text-white text-center w-2/3 mb-6">
            Another slide content here. Add your description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt, non et necessitatibus iste nam explicabo voluptatibus aliquid, ipsa excepturi ea enim magni veniam quam aut consequatur animi aspernatur. Iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nam repellat tenetur natus atque! Assumenda repellat, quaerat perferendis odit facere doloribus placeat, sapiente sit voluptas ut atque. Magnam, doloremque repellendus.
          </p>
          <button className="text-blue-900 bg-white px-4 py-2 hover:bg-blue-900 hover:text-white transition-all">Learn More</button>
        </div>
      </div>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/analyst-uses-computer-dashboard-data-600nw-2285412737.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          <h1 className="text-white text-4xl font-bold animate-fadeIn mb-6 text-center">Another Slide Title</h1>
          <p className="text-sm text-white text-center w-2/3 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iusto quia, esse laborum natus fugiat recusandae dolorum impedit culpa est neque. Tempora, omnis corporis dolores asperiores quam sit? Blanditiis, accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit nulla beatae. Mollitia maxime repellat rem distinctio voluptate deleniti. Possimus, reprehenderit expedita! Asperiores facere saepe, omnis tempore distinctio neque commodi.
          </p>
          <button className="text-blue-900 bg-white px-4 py-2 hover:bg-blue-900 hover:text-white transition-all">Learn More</button>
        </div>
      </div>
      {/* Add more slides as needed */}
    </OwlCarousel>
  );
}

export default Banner;
