var tbody = d3.select("tbody");
var button = d3.select("#button");

// function to populate our table

function populateTable(foo) {
    clearTable();
    foo.forEach((ufo) => {
        let row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

// filter table

function filterTable(foo) {
    console.log("filterTable called.")
    var newArray = data.filter(function (bar) {
        return bar.datetime === foo;
    });
    return newArray;
}

function clearTable() {
    tds = d3.selectAll("td");
    tds.remove();
}

function runFilter() {
    d3.event.preventDefault();
    console.log("runFilter called.");
    var inputElement = d3.select("#filter-form-input");
    var inputValue = inputElement.property("value");
    var filtered = filterTable(inputValue);
    populateTable(filtered);
}

button.on("click", runFilter);
populateTable(data);