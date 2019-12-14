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

//filter the data using an event handler

var filterButton= d3.select("#filter-btn")
filterButton.on("click", function () {

	// make sure the page doesn't refresh
	d3.event.preventDefault();

	// Select where in the html you want to insert your data--in this case datetime
	var datetimeElement = d3.select("#datetime");

	// Obtain search value
	var datetimeValue = datetimeElement.property("value");

	var filteredData = tableData.filter(data => data.datetime === datetimeValue);
    buildTable(filteredData);
    
    //console.log(filteredData);

});

//after you've filtered the data, for each relevant data component you've filtered, use that data
//to build a table.

function buildTable(Filter) {

	tbody.html("");
	Filter.forEach((Sighting) => {
		var row = tbody.append("tr");
		Object.entries(Sighting).forEach(([key, value]) => {
			var cell = tbody.append("td");
			cell.text(value);
		});
	});
}




