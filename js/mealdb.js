const searchFood = () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  inputField.value = "";
  if (inputText == "") {
    const emtyMessage = document.getElementById("emty-message");
    const div = document.createElement("div");
    div.style.textAlign = "center";
    div.style.marginTop = "30px";
    div.innerHTML = `
    <h1>Please Search Food</h1>
    `;
    emtyMessage.appendChild(div);
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => resultFood(data.meals));
  }
};
const resultFood = (data) => {
  const displayFood = document.getElementById("display-food");
  displayFood.textContent = "";
  data.forEach((food) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick="detailFoodData(${food.idMeal})" class="card h-100">
          <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
          </div>
        </div>
    `;
    displayFood.appendChild(div);
  });
};
const detailFoodData = (meal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => detailFood(data.meals[0]));
};
const detailFood = (data) => {
  const foodDetail = document.getElementById("food-detail");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${data.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${data.strMeal}</h5>
          <p class="card-text">${data.strInstructions.slice(0, 150)}</p>
          <a href="${data.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
  `;
  foodDetail.appendChild(div);
};
