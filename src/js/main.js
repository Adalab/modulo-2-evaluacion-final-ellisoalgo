'use strict';

const mainList = document.querySelector(".js-cocktailsList");
const favList = document.querySelector(".js-favouriteList");
const btnSearch = document.querySelector(".js-search-btn");
const inputSearch = document.querySelector(".js-search-input");
const emptyListMsg = document.querySelector(".js-empty-list");
const btnSearchReset = document.querySelector(".js-search-reset");
const btnFavouritesReset = document.querySelector(".js-favourite-reset-btn");
const searchError = document.querySelector(".js-error-not-found");

let drinksData = [];
let favouriteDrinks = [];

//functions
const renderDrink = (eachDrink)=>{
    const indexFav = favouriteDrinks.findIndex((item) => item.idDrink === eachDrink.idDrink);

    //if indexFav = -1, its not in fav array, if not, it is in the fav array adn therefore must add class marked
    let classMarked = indexFav === -1 ? "" : "marked";

    return `<li id="${eachDrink.idDrink}" class="js-drink ${classMarked} cocktails--list-card">
            <img src=${eachDrink.strDrinkThumb} alt="" class="cocktails--list-card-img">
            <h3 class="cocktails--list-card-title">${eachDrink.strDrink.toUpperCase()}</h3>
    </li>`;
    
};

const handleAddFavourites = (ev) =>{
    //get id of clicked drink
    const clickedDrinkId = ev.currentTarget.id;
    const clickedDrink = drinksData.find((item)=> item.idDrink === clickedDrinkId);

    //verify if clicked drink is already in fav array
    const favouriteClickedDrink = favouriteDrinks.findIndex((item)=> item.idDrink === clickedDrinkId);

    //add clicked drink to favourite array if not already in arrray favs
    if (favouriteClickedDrink === -1){
        favouriteDrinks.push(clickedDrink);   
    } else{
        //remove from favs
        favouriteDrinks.splice(favouriteClickedDrink, 1);
    };
    //console.log(favouriteDrinks);
    renderAllDrinks(drinksData);
    renderFavourites();

    //save in local storage
    localStorage.setItem("favouriteDrinks", JSON.stringify(favouriteDrinks));
};

const renderFavourites = ()=>{
    favList.innerHTML = '';
    if (favouriteDrinks.length === 0){
        emptyListMsg.classList.remove('hidden');
    } else{
        favouriteDrinks.forEach((favDrink) => {
            emptyListMsg.classList.add('hidden');
            favList.innerHTML += `<li id="${favDrink.idDrink}" class="js-drink marked favourites--list-card">
                    <img src=${favDrink.strDrinkThumb} alt="" class="favourites--list-card-img">
                    <h3 class="favourites--list-card-title">
                        ${favDrink.strDrink.toUpperCase()}
                        <i class="fa-solid fa-xmark favourites--list-card-title-cross"></i>
                    </h3>
            </li>`
        });
    };
    const allDrinksLi = document.querySelectorAll(".js-drink");
    for (const li of allDrinksLi) {
        li.addEventListener('click', handleAddFavourites);
    };
};

const renderAllDrinks = (array)=>{
    mainList.innerHTML = '';
    for (let i=0; i<array.length; i++){
        mainList.innerHTML += renderDrink(array[i]);
    };
    
    const allDrinksLi = document.querySelectorAll(".js-drink");
    for (const li of allDrinksLi) {
        li.addEventListener('click', handleAddFavourites);
    };
};

function getData(){
    let valueSearch = inputSearch.value;
    const drinksURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valueSearch}`;
    fetch(drinksURL)
    .then((response) => response.json())
    .then((dataApi) => {
        //store all drinks in array
        drinksData = dataApi.drinks;
        console.log(drinksData);
        
        renderAllDrinks(drinksData);
        localStorage.setItem("allDrinks", JSON.stringify(drinksData));
        renderFavourites();
    })
    .catch((error) => console.log(`Fuck, there's been an error: ${error}`));
};

function handleSearch(ev){
    ev.preventDefault();
    //let valueSearch = inputSearch.value;
    getData();
};

const init = ()=>{
    const localFavouriteDrinks = localStorage.getItem('favouriteDrinks');
    if (localFavouriteDrinks !== null){
        favouriteDrinks = JSON.parse(localFavouriteDrinks);
        renderFavourites();
    } else {
        getData();
    };
    const localAllDrinks = localStorage.getItem('allDrinks');
    if (localAllDrinks !== null){
        drinksData = JSON.parse(localAllDrinks);
        renderAllDrinks(drinksData);
    } else {
        getData();
    };
};

function resetSearch(ev){
    ev.preventDefault();
    inputSearch.value = '';
    getData();
};

function resetFavs(ev){
    ev.preventDefault();
    favouriteDrinks = [];
    localStorage.setItem("favouriteDrinks", JSON.stringify(favouriteDrinks));
    console.log('clicked');
    renderFavourites();
};

//execute on load page
btnSearch.addEventListener('click', handleSearch);
btnFavouritesReset.addEventListener('click', resetFavs);
btnSearchReset.addEventListener('click', resetSearch);
init();