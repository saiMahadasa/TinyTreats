/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable Just-In-Time mode for faster build times and smaller file sizes
  mode: "jit",
  
  // Specify the files Tailwind should scan for class names
  content: ["./src/**/*.{html,js,jsx}"],
  
  // Customize the default theme
  theme: {
    // Define custom font families
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    
    // Extend the default theme with additional configurations
    extend: {
      // Add custom screen sizes for responsive design
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"
      },
    },
  },
  
  // Specify any plugins to use (none in this case)
  plugins: [],
}
