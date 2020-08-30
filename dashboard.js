


// store api key
const apiKey = "36394c14779269deff3a084a8b70e006";

let city = $("#searchTerm").val();



$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});

$("#searchBtn").on("click", function() {

  $('#daysForecast').addClass('forecast');

  // get the value of the input from user
  city = $("#searchTerm").val();
  
  // clear input box
  $("#searchTerm").val("");  

  // full url to call api
  const queryUrl = "https://api.openweathermap.org/data/2.5/weather?" + city + apiKey;

  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (forecastResult){

    
    let tempF = (forecastResult.main.temp - 273.15) * 1.80 + 32;
    

    getCurrentConditions(forecastResult); 
    currFore(forecastResult);
    addForecastList();

    })
  });

  function addForecastList() {
    let listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
  }

  function getCurrentConditions (forecastResult) {

    // get the temperature and convert to fahrenheit 
    let tempF = (forecastResult.main.temp - 273.15) * 1.80 + 32;
    tempF = Math.floor(tempF);

    $('#currentCity').empty();

   
    // add to page
    city.append(cityDate, image)
    cardBody.append(city, temperature, humidity, wind);
    card.append(cardBody);
    $("#currentCity").append(card)
   
  }

function currFore () {
  
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
    method: "GET"
  }).then(function (forecastResult){

   
    }
  });

