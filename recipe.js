const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchedItem = document.getElementById("searched-item").value;
  result.classList.add("active");
  
  console.log(searchedItem)
  if (searchedItem) {
    fetchProducts(searchedItem);
  }
  form.reset();
});

async function fetchProducts(foodName){
    try {
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + foodName;
        const heading = document.getElementById("heading");
        const ingredientList = document.getElementById("ingredient-list");
        const instructions = document.getElementById("instructions");
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        const realData = data.meals[0];
        console.log(realData);
        heading.innerText = `${foodName} recipe`
        for (let i=1; i<=8; i++) {
            const ingredientName= `${realData[`strIngredient${i}`]}`
            ingredientList.innerHTML += `<li>${ingredientName}</li>`;
        }
        instructions.innerHTML = realData['strInstructions'];
        console.log(realData['strInstructions']);

    } catch (error) {
        console.log(error);
    }
}


