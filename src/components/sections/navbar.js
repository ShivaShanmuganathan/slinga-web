'use client'

import { useEffect, useRef, useState } from 'react'
import { useAnimate, motion } from 'framer-motion'
import { FiMenu, FiArrowUpRight, FiX } from 'react-icons/fi'
import useMeasure from 'react-use-measure'
import Link from 'next/link'

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [scope, animate] = useAnimate()
  const navRef = useRef(null)

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    const isNavElement = [...target.classList].includes('glass-nav')

    if (isNavElement) {
      setHovered(true)

      const top = offsetY + 'px'
      const left = offsetX + 'px'

      animate(scope.current, { top, left }, { duration: 0 })
    } else {
      setHovered(false)
    }
  }

  useEffect(() => {
    navRef.current?.addEventListener('mousemove', handleMouseMove)

    return () =>
      navRef.current?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? 'none' : 'auto'
      }}
      className='glass-nav fixed left-0 right-0 top-0 z-40 mx-auto max-w-6xl overflow-hidden border-[0.5px] border-custom-dark-orange bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl'
    >
      <div className='glass-nav flex items-center justify-between px-5 py-5'>
        <Cursor hovered={hovered} scope={scope} />
        <Links />
        <Logo />
        <Buttons setMenuOpen={setMenuOpen} />

        {/* <div className='hidden md:flex items-center gap-4'>
          <Links />
          <Buttons setMenuOpen={setMenuOpen} />
        </div> */}

        <button
          onClick={() => setMenuOpen(pv => !pv)}
          className='ml-2 block scale-100 text-3xl text-black/90 transition-all hover:scale-105 hover:text-black active:scale-95 md:hidden'
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  )
}

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${hovered ? 1 : 0}) translateX(-50%) translateY(-50%)`
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className='pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-orange-600 from-40% to-orange-400 text-2xl'
    >
      <FiArrowUpRight className='text-white' />
    </motion.span>
  )
}

const Logo = () => (
  <Link href='#hero'>
    <span className='relative left-0 top-[50%] z-40 text-4xl font-black text-black mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] font-serif'>
      🔱 SLINGA
    </span>
  </Link>
)

const Links = () => (
  <div className='hidden items-center gap-2 md:flex font-semibold text-lg'>
    <GlassLink text='Solutions' href='/#solutions' />
    <GlassLink text='Features' href='/#features' />
    <GlassLink text='FAQ' href='/#faq' />
  </div>
)

const GlassLink = ({ text, href }) => {
  return (
    <Link href={href} scroll={true}>
      <div className='group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95'>
        <span className='relative z-40 text-black/90 transition-colors group-hover:text-black'>
          {text}
        </span>
        <span className='absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100' />
      </div>
    </Link>
  )
}

const TextLink = ({ text, href }) => {
  return (
    <Link href={href} scroll={true}>
      <div className='text-black/90 transition-colors hover:text-black'>
        {text}
      </div>
    </Link>
  )
}

const Buttons = ({ setMenuOpen }) => (
  <div className='flex items-center gap-4'>
    <div className='hidden md:block'>
      <Link href='#cta'>
        <button className='group relative rounded-lg border-2 border-custom-dark-orange bg-gradient-to-br from-orange-500 from-20% to-orange-400 px-6 py-3 uppercase text-white transition-all duration-400 hover:shadow-lg hover:shadow-orange-600/50 font-semibold'>
          <span className='absolute left-0 top-0 size-full rounded-md border border-dashed border-indigo-50 shadow-inner shadow-white/30 group-active:shadow-white/10'></span>
          <span className='absolute left-0 top-0 size-full rotate-180 rounded-md border-indigo-50 shadow-inner shadow-black/30 group-active:shadow-black/10'></span>
          join the waitlist
        </button>
      </Link>
    </div>
  </div>
)

const MobileMenu = ({ menuOpen }) => {
  const [ref, { height }] = useMeasure()
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : '0px'
      }}
      className='block overflow-hidden md:hidden'
    >
      <div ref={ref} className='flex flex-col items-center gap-4 px-4 pb-4'>
        <TextLink text='Services' href='/#services' />
        <TextLink text='Features' href='/#features2' />
        <TextLink text='FAQ' href='/#faq' />
        <Link href='#cta'>
          <button className='group relative rounded-lg border-2 border-custom-dark-orange bg-gradient-to-br from-orange-500 from-20% to-orange-400 px-6 py-3 uppercase text-white transition-all duration-400 hover:shadow-lg hover:shadow-orange-600/50 font-semibold'>
            <span className='absolute left-0 top-0 size-full rounded-md border border-dashed border-indigo-50 shadow-inner shadow-white/30 group-active:shadow-white/10'></span>
            <span className='absolute left-0 top-0 size-full rotate-180 rounded-md border-indigo-50 shadow-inner shadow-black/30 group-active:shadow-black/10'></span>
            join the waitlist
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

export default GlassNavigation
