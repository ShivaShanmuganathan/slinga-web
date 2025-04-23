'use client'
import { HeroHighlight} from './ui/hero-highlight'

export default function HeroSection () {
  return (
    <div>
      <HeroHighlight className='p-1 md:p-20'>
        <div>
            Welcome to my website
        </div>
      </HeroHighlight>
    </div>
  )
}
