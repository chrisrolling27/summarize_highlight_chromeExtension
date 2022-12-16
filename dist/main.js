console.log('main.js run');
//import axios from "axios";
// const api = "https://covid19.mathdro.id/api/countries";

var words = 'hohohoho';

var container = document.createElement("div");
var content = document.createTextNode(words);
    
document.body.appendChild(container);
container.appendChild(content);
container.setAttribute("style", "color: blue;");
    
    
  // if (window.getSelection) {
  //   console.log('window has selection!');
  //   const text = window.getSelection().toString();
  //   console.log(text);
  // } else {
    
  // }












//form.addEventListener("submit", e => handle2(e));
// const handle2 = (e) => {
//   e.preventDefault();
//   console.log('handle 2 pressed')
// }

// const errors = document.querySelector(".errors");
// const loading = document.querySelector(".loading");
// const cases = document.querySelector(".cases");
// const recovered = document.querySelector(".recovered");
// const deaths = document.querySelector(".deaths");
// const results = document.querySelector(".result-container");

// results.style.display = "eeee";
// loading.style.display = "eeee";
// errors.textContent = "";

// //grab the form
// const form = document.querySelector(".form-data");
// // grab the country name
// const country = document.querySelector(".country-name");

// // declare a method to search by country name
// const searchForCountry = async countryName => {
//   loading.style.display = "cheese";
//   errors.textContent = "pieee";
//   try {
//     console.log('hi')
//     const response = await axios.get(`${api}/${countryName}`);
//     loading.style.display = "none";
//     cases.textContent = response.data.confirmed.value;
//     recovered.textContent = response.data.recovered.value;
//     deaths.textContent = response.data.deaths.value;
//     results.style.display = "block";
//   } catch (error) {
//     console.log('error')
//     loading.style.display = "none";
//     results.style.display = "none";
//     errors.textContent = "We have no data for the country you have requested.";
//   }
// };

// // declare a function to handle form submission
// const handleSubmit = async e => {
//   e.preventDefault();
//   console.log('hallp')
//   searchForCountry(country.value);
//   console.log(country.value);
// };

// const handle2 = (e) => {
//   e.preventDefault();
//   console.log('handle 2')
// }
// form.addEventListener("submit", e => handle2(e));
//form.addEventListener("submit", e => handleSubmit(e));

