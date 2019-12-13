// from data.js
var tableData = data;

// YOUR CODE HERE!
//select where you will append your table using d3
var tbody = d3.select("tbody");

//make sure you can loop through the data. create your own variable..can be anything
data.forEach(function(Sighting) {
    console.log(Sighting);
});
    
data.forEach(function(Sighting) {
    console.log(Sighting);
    var row = tbody.append("tr");
    Object.entries(Sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

//filter the data using a listener

var filterBar= d3.select("#form-group")




