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
        In the world of anime, characters are reflections of our own aspirations and emotions.
        From strong-willed heroes to those searching for their destiny,
        they resemble us, designed to overcome life's challenges.
        Associating ourselves with them allows us to find inspiration and understanding,
        immersing in their stories and discovering new facets of strength and resilience within ourselves.
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