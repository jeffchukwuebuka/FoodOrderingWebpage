const sandwichRes = document.getElementById("sandwichRes");
const cubanaRes = document.getElementById("cubanaRes");
const topRankRes = document.getElementById("topRankRes");
const jeffDonRes = document.getElementById("JeffDonRes");
const theGateRes = document.getElementById("theGateRes");
const magicStarRes = document.getElementById("magicStarRes");
const landHighTouchRes = document.getElementById("landHighTouchRes");
const zenithLandRes = document.getElementById("zenithLandRes");

function fetchRestaurantApi() {
  fetch("https://localhost:7088/api/foodOrderingSys/restaurant")
    .then((res) => res.json())
    .then((data) => {
      sandwichRes.innerHTML = data[5].name;
      cubanaRes.innerHTML = data[0].name;
      topRankRes.innerHTML = data[1].name;
      jeffDonRes.innerHTML = data[2].name;
      theGateRes.innerHTML = data[3].name;
      magicStarRes.innerHTML = data[4].name;
      landHighTouchRes.innerHTML = data[6].name;
      zenithLandRes.innerHTML = data[7].name;
    });
}

fetchRestaurantApi();
