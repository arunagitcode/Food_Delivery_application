import React from 'react'
import { CARD_URL } from '../utils/Logos'

export const Carousel = (data) => {
  console.log("dataaaaa", data)
  // console.log("arunaa",data?.data[1].description)
  const { description, imageId } = data.data

  return (
    <div className='car_container'>

      <div className='carousel'>
        <div className='carousel_image'>
          <img
            alt="cards_images"
            src={CARD_URL + imageId}
            className="w-[180px] h-32 rounded-2xl"
          ></img>

        </div>

      </div>
    </div>

  )
}
export default Carousel;