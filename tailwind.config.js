/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background3':"url('https://res.cloudinary.com/dbpcptmco/image/upload/v1716203886/sl-banner4_v3jwr1.jpg')",
        'background2':"url('https://res.cloudinary.com/dbpcptmco/image/upload/v1716203885/sl-banner1_minsc9.jpg')",
        'background4':"url('https://res.cloudinary.com/dbpcptmco/image/upload/v1716203885/sl-banner2_asbj60.jpg')",
        'background':"url('https://res.cloudinary.com/dbpcptmco/image/upload/v1716203885/sl-banner3_rnbfst.jpg')",
        'bgimage': "url('https://p.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/banner2.jpg')",
        'aboutImage':"url('https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/banner2.jpg')"

      },
      
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'herotext': '#00214f',
        'black': '#3459DA',
        'heroparagraph': '#232333',
        'herobutton': '#3CD19C',
        'header': '#3459DA',
        'hover': '#FF641D',
        'buttoncol': '#001328',
        'buttonhover': '#007bff',
        'h3text': '#0057B3',
      },
      screens: {
        'xl': { 'max': '1280px' },
        'xsm': {'max': '320px'},
        'sm': {'max': '375px'},
        'xmd': {'max': '500px'},
        'md': {'max': '768px'},
        'lg': {'max': '1024px'}
      },
    },
  },
  plugins: [],
}