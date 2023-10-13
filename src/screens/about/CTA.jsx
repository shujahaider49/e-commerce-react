import React from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
    <section className="bg-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-[670px]" >
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <Fade left>
    <ReactParallaxTilt tiltEnable={false} glareEnable={true} glareMaxOpacity={0.8} glareColor="white" glarePosition="bottom">
        <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
        <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/>
        </ReactParallaxTilt>
        </Fade>
        <Fade right cascade>
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your Ultimate Shopping Destination</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">E-Store brings you the best in online shopping. Explore a world of products curated for your unique tastes. Shop, discover, and redefine the way you buy all in one place.</p>
            <Link
              to='/'
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </Link>
        </div>
        </Fade>
    </div>
</section>
</>
  )
}

export default CTA