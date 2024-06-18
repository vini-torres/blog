import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,tsx,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      light: {
        100: '#E5E7EB',
        200: '#F2F2F2',
        300: '#C8C8C8',
        400: '#636363',
        500: '#666666',
        600: '#787878',
        700: '#3D3D3D',
        800: '#27272a',
        900: '#18181b',
      },
      dark: {
        100: '#E5E5E5',
        200: '#898989',
        300: '#202020',
        400: '#222222',
        500: '#262626',
        600: '#171717',
      },
    },
  },
  plugins: [],
}
export default config
