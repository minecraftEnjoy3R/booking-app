import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="ervin.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full
          object-cover rounded-3xl"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl"><span className='text-primary'>Find your characher</span></h2>

        <p className="mt-4 text-gray-600">
        Erwin Smith, the leader of the Survey Corps in "Attack on Titan,"
        embodied the indomitable spirit of a true hero. Fearlessly leading his squad to the boundaries of desperate struggle,
        he became the epitome of resolve and strength.
        His heroic feat became a symbol of unwavering pursuit of freedom in the face of deadly titans..
        </p>

       <Button className="mt-10">Explore Now</Button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero