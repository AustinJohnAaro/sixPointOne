
{"coord";{"lon";-0.1257,"lat";51.5085};"weather";[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base";"stations","main";{"temp";282.04,"feels_like";274.39,"temp_min";281.48,"temp_max";282.59,"pressure";1015,"humidity";66};"visibility";10000,"wind";{"speed";8.75,"deg";250};"rain";{"1h";0.37};"clouds";{"all";75};"dt";1615744211,"sys";{"type";1,"id";1414,"country";"GB","sunrise";1615702604,"sunset";1615744965};"timezone";0,"id";2643743,"name";"London","cod";200}

var repoContainerEl = document.querySelector("#city");
var repoSearchTerm = document.querySelector("#city");
var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://openweathermap.org/api" + user + "city";
  var endPoint = "api.openweathermap.org"; 
  // make a get request to url
  fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });
    
  });
};
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
getUserRepos("lernantino");
var formSubmitHandler = function(event) {
  event.preventDefault();
  console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);

var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}

var displayRepos = function(repos, searchTerm) {
  for (var i = 0; i < repos.length; i++) {
    // format repo name
    var repoName = repos[i].owner.login + "/" + repos[i].name;
  
    // create a container for each repo
    var repoEl = document.createElement("div");
    repoEl.classList = "list-item flex-row justify-space-between align-center";
  
    // create a span element to hold repository name
    var titleEl = document.createElement("span");
    titleEl.textContent = repoName;
  
    // append to container
    repoEl.appendChild(titleEl);
  
    // append container to the dom
    var statusEl = document.createElement("span");
statusEl.classList = "flex-row align-center";

// check if current repo has issues or not
if (repos[i].open_issues_count > 0) {
  statusEl.innerHTML =
    "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
} else {
  statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
}

// append to container
repoEl.appendChild(statusEl);
    repoContainerEl.appendChild(repoEl);
  }
  repoContainerEl.textContent = "";
repoSearchTerm.textContent = searchTerm;
  console.log(repos);
  console.log(searchTerm);
};



//if (repos.length === 0) {
 // repoContainerEl.textContent = "No repositories found.";
  
//}



//fetch(apiUrl).then(function(response) {
  //fetch(apiUrl)
  //.then(function(response) {
    // request was successful
    //if (response.ok) {
      //response.json().then(function(data) {
        //displayRepos(data, user);
      //});
   // } else {
     // alert("Error: " + response.statusText);
    //}
 // })
  //.catch(function(error) {
    // Notice this `.catch()` getting chained onto the end of the `.then()` method
   // alert("Unable to connect to GitHub");
  //});