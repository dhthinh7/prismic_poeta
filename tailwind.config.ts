import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './slices/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-card':
          'linear-gradient(0deg, rgba(255, 75, 1, 0.00) 0%, rgba(255, 75, 1, 0.00) 100%), linear-gradient(180deg, rgba(34, 60, 77, 0.00) 0%, rgba(34, 60, 77, 0.20) 16.15%, rgba(34, 60, 77, 0.90) 100%)',
        'gradient-primary-rl':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(90deg, rgba(74, 166, 157, 0.90) 56.5%, rgba(250, 160, 0, 0.90) 100%)'
      },
      colors: {
        primary: '#FF4B01',
        secondary: '#faa000',
        tertiary: '#B04B34',
        title: '#231f20',
        'card-name-light': '#999999',
        'card-border': '#CCCCCC',
        'text-light': '#444444',
        'blue-dianna': '#223C4D',
        'slice-title': '#0D1011',
        'card-bg': 'rgba(255, 75, 1, 0.03)',
        'slate-gray': '#3E4749',
        'sub-title-card': '#879499',
        'light-blue': '#c3d4f133]'
      },
      boxShadow: {
        'primary-double': '0 4px 6px 1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1)',
        'service-card': '0 4px 6px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
        ds: '0px 4px 15px 0px rgba(62, 71, 73, 0.10)',
        card: '0px 4px 15px 0px rgba(62, 71, 73, 0.20)',
        blog: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      backgroundColor: {
        primary: 'rgba(237, 243, 251, 1)',
        'light-input': '#e9eff8'
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        sourceCodePro: 'var(--font-sourceCodePro)'
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)'
      // },
      maxWidth: {
        sm: 'calc(100vw - 40px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
