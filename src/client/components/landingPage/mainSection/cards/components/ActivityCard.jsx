import React from 'react'
import CardContainer from '../container/CardContainer'
import MapPointer from '../../../../../share/svg/MapPointer';
import StarIcon from '../../../../../share/svg/Star';
// import BedIcon from '../../../../../share/svg/Bed';
import Activities from '../../../assets/Activities.png';
import NairaIcon from '../../../../../share/svg/Naira';
import Clock from '../../../../../share/svg/Clock';
import CircleUpIcon from '../../../../../share/svg/CircleUp';
import CircleDownIcon from '../../../../../share/svg/CircleDown';

const ActivityCard = () => {
  return (
    <CardContainer>
      <div className="flex space-x-3 px-4 w-full">
        <img src={Activities} alt="Hotel alt" />

        <div className="w-full">
          <div className="">
            <div className="flex items-start justify-between">
              <div className="pr-5 space-y-2 w-8/12">
                <p className="font-bold text-xl">The Museum of Modern Art</p>
                <p className="text-sm">
                  Works from Van Gogh to Warhol & beyond plus a sculpture
                  garden, 2 cafes & The modern restaurant
                </p>

                <div className="flex space-x-3 text-sm">
                  <div className="flex items-center justify-start space-x-1">
                    <MapPointer />
                    <p className="text-blue">Directions</p>
                  </div>

                  <div className="flex items-center justify-between text-gray-500 space-x-1">
                    <StarIcon />
                    <p className="text-gray-600">4.5 (436)</p>
                  </div>

                  <div className="flex items-center justify-between text-gray-500 space-x-1">
                    <Clock />
                    <p className="text-gray-600">1 Hour</p>
                  </div>
                </div>
              </div>

              <div className="w-4/12 items-end justify-end">
                <div className="flex items-center justify-end">
                  <NairaIcon />
                  <p className="font-bold text-3xl">123,450.00</p>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <p className="text-sm">10:30 AM on Mar 19</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-6" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-gray-600 py-5 text-sm">
              <p>What's Included:</p>
              <div className="flex space-x-2">
                <p className="text-gray-600">
                  Admission to the Empire State Building
                </p>
                <p className="text-blue">See more</p>
              </div>
            </div>
            <div className='flex items-center space-x-3'>
              <button className="bg-darkBlue text-white text-[12px] rounded-md p-2">
                Day1 - (2)
              </button>
              <div className='space-y-2'>
                <CircleUpIcon/>
                <CircleDownIcon/>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex items-end justify-between text-blue mt-4 font-semibold text-[14px]">
            <div className="flex items-center space-x-4">
              <p>Activity details</p>
              <p>Price details</p>
            </div>
            <p>Edit details</p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default ActivityCard