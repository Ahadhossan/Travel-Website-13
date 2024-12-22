import React from 'react'
import HotelCard from './Helper/HotelCard'

const Hotels = () => {
  return (
    <div className="pt-[5rem] bg-gray-200 pb-[4rem] ">
      <h1 className="heading">Best Hotel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[90%] mx-auto mt-[4rem]">
        <div data-aos="fade-left">
          <HotelCard
            image="/images/h1.png"
            name="hotel Nextus"
            city="Dhaka"
            price="$123"
            reviewNum="21"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <HotelCard
            image="/images/h2.png"
            name="hotel Reactive"
            city="Dhaka"
            price="$223"
            reviewNum="31"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="600">
          <HotelCard
            image="/images/h3.png"
            name="hotel TypeScript"
            city="Japan"
            price="$423"
            reviewNum="51"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="900">
          <HotelCard
            image="/images/h4.png"
            name="hotel Mongohouse"
            city="England"
            price="$523"
            reviewNum="81"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="1200">
          <HotelCard
            image="/images/h5.png"
            name="hotel Res"
            city="India"
            price="$323"
            reviewNum="34"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="1600">
          <HotelCard
            image="/images/h6.png"
            name="hotel Higit"
            city="USA"
            price="$723"
            reviewNum="91"
          />
        </div>
      </div>
    </div>
  );
}

export default Hotels
