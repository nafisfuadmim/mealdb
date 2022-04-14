const loadData = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => kanyeQoute(data));
};
const kanyeQoute = (qouteData) => {
  console.log(qouteData);
  const qouteElement = document.getElementById("qoute");
  qouteElement.innerText = qouteData.quote;
};
