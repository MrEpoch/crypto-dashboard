import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
				darkmode: {
					500: '#121212',
					400: '#181818',
					300: '#404040',
					200: '#282828',
					100: '#B3B3B3'
				}
			}
    },
    fontFamily: {
        oswald: ['var(--font-oswald)'],
    }
  },
  plugins: [],
}
export default config
