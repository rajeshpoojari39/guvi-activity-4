var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var Countriesdata = JSON.parse(this.response);
  //Country Name and Flag
  Countriesdata.forEach((country) => {
    console.log(
      `Country Name - ${country.name.official}, Flag - ${country.flag}`
    );
  });

  //Country Name,Region,Subregion,Population
  Countriesdata.forEach((country) => {
    console.log(
      `Country Name - ${country.name.official}, Region - ${country.region}, Subregion - ${country.subregion}, Population - ${country.population}`
    );
  });
};
