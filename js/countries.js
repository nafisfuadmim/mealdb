const loadData = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => countries(data));
};
loadData();
const countries = (data) => {
  const countriesDiv = document.getElementById("countries");
  data.forEach((loopData) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${loopData.name}</h3>
    <p>${loopData.capital}</p>
    <button onclick="loadDetail('${loopData.name}')">Details</button>
    `;
    countriesDiv.appendChild(div);
    div.classList.add("country");
  });
};
const loadDetail = (data) => {
  const url = `https://restcountries.com/v3.1/name/${data}`;
  fetch(url)
    .then((res) => res.json())
    .then((rest) => detailCountries(rest[0]));
};
const detailCountries = (rest) => {
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
  <h1>Country: ${rest.name.common}</h1>
  <p>Popolation: ${rest.population}</p>
  <img src="${rest.flags.png}"/>
  `;
};
