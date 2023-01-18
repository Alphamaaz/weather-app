let place = document.getElementById("place");
let centigrade = document.getElementById("centigrade");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let check = "";
function main() {
  if (input.value === "") {
    check = "peshawar";
  } else {
    check = input.value;
  }
  // btn.addEventListener("click", () => {
  //   let cap = input.value;
  //   let l = cap.charAt(0).toUpperCase() + cap.slice(1);
  //   place.innerHTML = l;
  //   check = l;
  // });

  let loc = capitalize(check);

  place.innerHTML = loc;

  let date = new Date().toDateString();
  document.getElementById("date").innerHTML = date;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c9a7bcb930msh122145e0cd5dc9dp154f4fjsndc7bd0c0c4fd",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${check}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let temperatue = response.temp;
      centigrade.innerHTML = temperatue;
      document.getElementById("max_temp").innerHTML = response.max_temp + " C";
      document.getElementById("min_temp").innerHTML = response.min_temp + " C";
      document.getElementById("wind_degrees").innerHTML =
        response.wind_degrees + " d";
      document.getElementById("wind_speed").innerHTML =
        response.wind_speed + " m/s";
      document.getElementById("feels_like").innerHTML =
        response.feels_like + " C";
      document.getElementById("humidity").innerHTML = response.humidity + " %";
      document.getElementById("sunrise").innerHTML = response.sunrise;
      document.getElementById("sunset").innerHTML = response.sunset;
      console.log(temperatue);
    })
    .catch((err) => console.error(err));
}

// *******************CAPITALIZE FIRST LETTER ******************
const capitalize = (val) => {
  const rtn = val.charAt(0).toUpperCase() + val.slice(1);
  return rtn;
};

// *************** GET CURRENT DATE *****************************

main();
