// console.log('hello');



const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML);
    

    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHTML.join(' ');

}

// orginal way
// const getCountryHTML = country =>{
//     return `
//         <div class="country">
//             <h3>${country.name.common}</h3>
//             <p>${country.capital?.[0]}</p>
//             <img src = "${country.flags.png}">
//         </div>
//     `
// }


// option 1
// const getCountryHTML = country =>{
    // destructuring-->Easy way to accessing data
    // const {name , capital , flags} = country;

    // return `
    //     <div class="country">
    //         <h3>${name.common}</h3>
    //         <p>${capital?.[0]}</p>
    //         <img src = "${flags.png}">
    //     </div>
//     // `
// }

// Option 2
const getCountryHTML = ({name , capital , flags}) =>{
    // destructuring-->in the parameter
    // const {name , capital , flags} = country;
    return `
        <div class="country">
            <h3>${name.common}</h3>
            <p>${capital?.[0]}</p>
            <img src = "${flags.png}">
        </div>`
}



loadCountries();
