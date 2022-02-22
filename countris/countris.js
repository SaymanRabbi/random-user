const allCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountry(data))
}
allCountry();
const section = document.getElementById('section');
const showCountry = (name)=>{
    name.forEach(country => {
        // console.log(country.capital)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `<h3>Name:${country.name.common}</h3><p>Capital:${country.capital} </p> <button onClick='displayDetails("${country.name.common}")'>Details</button>`
        section.appendChild(div)
  })
   
}
const displayDetails = (details) => {
    const url = `https://restcountries.com/v3.1/name/{${details}}`
    fetch(url)
        .then(res => res.json())
        .then(data => ShowDetails(data[0]))
}
const display = document.getElementById('display');
const ShowDetails = (countries) => {
    display.innerHTML = `<h2> ${countries.name.common}</h2> <p>${countries.population}</p><img height =100px; src="${countries.flags.png}" />`
}