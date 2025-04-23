'use client'

import { DotBackground } from '../ui/dot-background'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'

const LazySpline = lazy(() => import("@splinetool/react-spline"));

function HeroSection() {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-[rgb(17,17,17)]' id='hero'>
      <DotBackground />
      
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <nav className='flex items-center justify-between py-6'>
          <div className='flex items-center gap-8'>
            <a href='#' className='text-2xl font-bold text-white'>🔱 SLINGA</a>
            <div className='hidden md:flex items-center gap-6'>
              <a href='#solutions' className='text-gray-300 hover:text-white transition-colors'>Solutions</a>
              <a href='#features' className='text-gray-300 hover:text-white transition-colors'>Features</a>
              <a href='#faq' className='text-gray-300 hover:text-white transition-colors'>FAQ</a>
            </div>
          </div>
          <a 
            href='#waitlist'
            className='rounded-full bg-orange-500 px-6 py-2.5 text-white hover:bg-orange-600 transition-colors'
          >
            JOIN THE WAITLIST
          </a>
        </nav>

        <div className='mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <motion.h1 
              className='text-5xl md:text-7xl font-bold text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Supercharge Your Pet Care Business
            </motion.h1>
            <motion.p 
              className='mt-6 text-xl text-gray-400'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Effortlessly manage appointments, simplify payments, and exceed client expectations with our comprehensive, cost-effective pet care management solution.
            </motion.p>
            <motion.div 
              className='mt-10 flex items-center gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className='relative flex-1 max-w-sm'>
                <input 
                  type='email'
                  placeholder='Enter your email'
                  className='w-full rounded-full bg-white/10 px-6 py-3 text-white placeholder-gray-400 outline-none ring-1 ring-white/20 backdrop-blur-sm focus:ring-2 focus:ring-orange-500'
                />
              </div>
              <button className='rounded-full bg-orange-500 px-8 py-3 font-medium text-white hover:bg-orange-600 transition-colors'>
                Join Waitlist
              </button>
            </motion.div>
          </div>

          <div className='relative h-[500px]'>
            <Suspense fallback={<div className='h-full w-full bg-white/5 rounded-lg animate-pulse' />}>
              <LazySpline
                scene="https://prod.spline.design/mZBrYNcnoESGlTUG/scene.splinecode"
                className="absolute inset-0 w-full h-full"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection