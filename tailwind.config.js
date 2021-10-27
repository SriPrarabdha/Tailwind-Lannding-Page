module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple" : "#5267DF" , 
        "bookmark-red" : "#FA5959" ,
        "bookmark-blue" : "#242A45",
        "bookmark-white" : "#f7f7f7",
        "bookmark-grey" : "#9194A2",
      }
    },
    fontFamily :{
      poppins: ["poppins"  , "sans-serif"]
    },
    container:{
      center:true ,
      padding: "1rem" , 
      screens : {
        lg : "1124px",
        xl: "1124px" ,
        "2xl" : "1124px" ,
        sm : "330px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
