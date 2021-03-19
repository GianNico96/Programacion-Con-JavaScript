//Reto 1

/*let selectImages = document.body.getElementsByTagName('img');

    for (let i = selectImages.length-1; i >= 0; i--) {
        let img = selectImages[i];
		console.log(img);
		let textAlt = document.createTextNode(img.alt);
		img.parentNode.replaceChild(textAlt, img);
	}
*/

//Reto 2
var data = [
	{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
	{name: "Everest", height: 8848, place: "Nepal"},
	{name: "Mount Fuji", height: 3776, place: "Japan"},
	{name: "Vaalserberg", height: 323, place: "Netherlands"},
	{name: "Denali", height: 6168, place: "United States"},
	{name: "Popocatepetl", height: 5465, place: "Mexico"},
	{name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

function createTable(data) {

	var arrayCamp = Object.keys(data[0]);

	var table = document.createElement("table");
	var headRow = document.createElement("tr");

	arrayCamp.forEach(function(camp) {
	  var headCell = document.createElement("th");
	  headCell.appendChild(document.createTextNode(camp));
	  headRow.appendChild(headCell);
	});
	table.appendChild(headRow);
  
	data.forEach(function(obj) {
	  var row = document.createElement("tr");
	  arrayCamp.forEach(function(camp) {
		var cell = document.createElement("td");
		cell.appendChild(document.createTextNode(obj[camp]));
		if (typeof obj[camp] == "number") {
			cell.style.textAlign = "right";
		}
		row.appendChild(cell);
	  });
	  table.appendChild(row);
	});
  
	return table;
}

document.getElementById("mountains")
.appendChild(createTable(data));