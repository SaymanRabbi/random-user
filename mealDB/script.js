const toast = document.getElementById('toast')
const input = document.getElementById('input')
document.getElementById('button').addEventListener('click', () => {
    toast.style.display = "none"
})
// --------Take search Result Filed Form Api
document.getElementById('basic-addon2').addEventListener('click', () => {
    const inputText = input.value;
    if (inputText == '' || isNaN(inputText)==false) {
        toast.style.display = 'block'
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
        input.value = '';
        fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data))
    }
})
// -----show result in display
const displayResult = (searchResult) => {
  if (searchResult.meals == null) {
    toast.style.display = 'block'
    document.getElementById('error').innerText = "Error";
    document.getElementById('error').style.color = "red";
    document.getElementById('toast-body').innerText = "Not Found Anything";
    document.getElementById('toast-body').style.color = "red";
    return;
  }
    const container = document.getElementById('container');
    container.textContent = '';
    const AllSearchResult = searchResult.meals;
    AllSearchResult.forEach((result) => {   
        // console.log(result)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card"  style="background-color: transparent;">
        <img src="${result.strMealThumb}" class="card-img-top" alt="">
        <div class="card-body">
           <h5 class="card-title ">${result.strMeal}</h5>
           <p class="card-text">${result.strInstructions.slice(0, 150)}</p>
           <button onclick="ShowDetails('${result.idMeal}')" class="btn btn-secondary">Show Details</button>
        </div>
      </div>`;
        container.appendChild(div);
    })

} 
const ShowDetails = (details) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`
    fetch(url)
        .then(res => res.json())
        .then(data => ShowPopUp(data.meals[0]));
}
const popUp = document.getElementById('pop-Up');
const ShowPopUp = (showPop) => {
    popUp.innerHTML = `<div id="id" class="card mb-3 h-auto my-auto mt-2 p-3 mx-auto text-black" style="max-width: 540px;">
    <div class="row g-0 m-auto h-75">
      <div class="col-md-12 text-center position-relative">
        <img src="${showPop.strMealThumb}" class="w-50 rounded-start" alt="">
        <button type="button" class="btn-close" id="button-tow" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="col-md-12 p-4">
        <div class="card-body">
          <h5 class="card-title">${showPop.strMeal}</h5>
          <p class="card-text">${showPop.strInstructions.slice(0, 180)}</p>
          <p class="card-text">StrMeasure:${showPop.strMeasure2}</p>
          <small >${showPop.strMeasure3}</small><br>
          <small >${showPop.strMeasure4}</small><br>
          <small >${showPop.strMeasure5}</small>
        </div>
      </div>
    </div>
  </div>`
    popUp.style.display = "block"
    document.getElementById('button-tow').addEventListener('click', () => {
        popUp.style.display = "none"
     })
}
