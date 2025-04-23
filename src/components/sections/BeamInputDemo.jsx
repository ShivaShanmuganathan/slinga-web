import {
    animate,
    useMotionTemplate,
    useMotionValue,
    motion
  } from 'framer-motion'
  import React, { useEffect, useState, useRef } from 'react'
  import { Bounce, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'
  import emailjs from '@emailjs/browser'
  
  const BeamInputDemo = () => {
    return <BeamInput />
  }
  
  const BeamInput = () => {
    const inputRef = useRef(null)
    const formRef = useRef(null) // Create a reference for the form
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toastId = useRef(null)
  
    const turn = useMotionValue(0)
    const handleSubmit = e => {
      e.preventDefault()
      if (isSubmitting) return // Prevent multiple submissions
  
      const email = inputRef.current.value
      if (!email) {
        toast.error('Email is required', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce
        })
        return
      }
  
      setIsSubmitting(true)
  
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current, // Use the form reference here
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID // Use the user ID directly
        )
        .then(
          () => {
            console.log('SUCCESS!')
            if (!toast.isActive(toastId.current)) {
              toastId.current = toast.success('Congratulations! 🎉', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce
              })
            }
            setIsSubmitting(false)
          },
          error => {
            console.log('FAILED...', error)
            if (!toast.isActive(toastId.current)) {
              toastId.current = toast.error('Error signing up', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce
              })
            }
            setIsSubmitting(false)
          }
        )
    }
  
    useEffect(() => {
      animate(turn, 1, {
        ease: 'linear',
        duration: 5,
        repeat: Infinity
      })
    }, [])
  
    const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #a78bfa00 75%, #FF5733 100%)`
  
    return (
      <form
        ref={formRef} // Attach the form reference here
        onSubmit={handleSubmit}
        onClick={() => {
          inputRef.current.focus()
        }}
        className='relative flex w-full bg-slate-50 max-w-md items-center gap-2 rounded-full border border-black/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5'
      >
        <input
          ref={inputRef}
          type='email'
          placeholder='Enter your email'
          className='w-full bg-transparent font-medium text-base text-custom-dark-orange placeholder-slate-600 focus:outline-0'
          name='from_email'
        />
  
        <button
          className='group relative shrink-0 rounded-full border-2 border-custom-dark-orange bg-gradient-to-br from-orange-500 from-20% to-orange-400 px-6 py-3 text-white transition-all duration-400 hover:shadow-full hover:shadow-orange-600/50 font-semibold'
          style={{ marginLeft: '0px' }} // Ensures button is left-aligned
          onClick={e => e.stopPropagation()}
        >
          <span className='absolute left-0 top-0 size-full rounded-full border border-dashed border-indigo-50 shadow-inner shadow-white/30 group-active:shadow-white/10'></span>
          <span className='absolute left-0 top-0 size-full rotate-180 rounded-full border-indigo-50 shadow-inner shadow-black/30 group-active:shadow-black/10'></span>
          Join Waitlist
        </button>
  
        <div className='pointer-events-none absolute inset-0 z-10 rounded-full'>
          <motion.div
            style={{
              backgroundImage
            }}
            className='mask-with-browser-support absolute -inset-[1px] rounded-full border border-transparent bg-origin-border'
          />
        </div>
      </form>
    )
  }
  
  export default BeamInputDemo
  