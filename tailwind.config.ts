import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '1rem',
  		screens: {
  			'2xl': '1000px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)'
  			],
  			mono: [
  				'var(--font-geist-mono)'
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			marquee: 'marquee 60s linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
  			'marquee-reverse': 'marquee-reverse 60s linear infinite',
  			'marquee-slow': 'marquee 120s linear infinite',
  			'marquee-reverse-slow': 'marquee-reverse 120s linear infinite',
  		},
  		keyframes: {
  			marquee: {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(calc(-25% - var(--gap)))' }
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			ripple: {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-50%, -50%) scale(0.9)'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			},
  			'marquee-reverse': {
  				'0%': { transform: 'translateX(calc(-25% - var(--gap)))' },
  				'100%': { transform: 'translateX(0)' }
  			},
  		},
  		backgroundSize: {
  			'grid-1': '100% 100%',
  			'grid-2': '50% 100%',
  			'grid-3': 'calc(100%/3) 100%',
  			'grid-4': '25% 100%',
  			'grid-5': '20% 100%',
  			'grid-6': 'calc(100%/6) 100%'
  		},
  		backgroundImage: {
  			'grid-1': 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
  			'grid-2': 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
  			'grid-3': 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
  			'grid-4': 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
  			'grid-5': 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
  			'grid-6': 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-case-study': 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3))',
  		},
  		boxShadow: {
  			'case-study': '0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.1)',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
