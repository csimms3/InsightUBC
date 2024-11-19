import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

document.getElementById("click-me-button").addEventListener("click", handleClickMe);

async function handleClickMe() {
	try {
		const response = await fetch("http://localhost:4321/echo/hello");
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		alert("This is a test! \n" + json["result"]);
	} catch (e) {
		alert("Error! \n" + e.message);
	}
}

document.getElementById("add-dataset-button").addEventListener("click", handleAddDatasetButton);

async function handleAddDatasetButton(event) {
	event.preventDefault();
	const datasetID = document.getElementById("addDatasetID").value;
	const datasetZIP = document.getElementById("addDatasetFile").files[0];

	const fileReader = new FileReader();
	fileReader.readAsDataURL(datasetZIP);


	fileReader.onload = async function () {
		// console.log(fileReader.result);

		// const fetchOptions = {
		// 	method: "POST",
		// 	body: JSON.stringify({ username: "example" }),
		// 	headers: {'Content-Type': 'application/json'},
		// }

		const response = await fetch("http://localhost:4321/datasets");

		var json = await response.json()
		console.log(json);
		// fetch("http://localhost:4321/datasets")
		// 	.then((response) => {
		// 	console.log("Response incoming!");
		// 	console.log(response);
		// })
	}

	fileReader.onerror = function () {
		console.log(fileReader.error);
	}




}





// const plotOptions = {
// 	y: {grid: true}
// }
//
// const plot1DData = [1, 3, 2, 5, 2, 6];
// const plot1D = Plot.lineY(plot1DData).plot(plotOptions);
//
// const plot2DData = [[0, 1], [1, 3], [3, 5], [4, 2], [5, 6], [9, 2]];
// const plot2D = Plot.line(plot2DData).plot(plotOptions);
//
//
//
// const div = document.querySelector("#testplots");
// div.append(plot1D);
// div.append(plot2D);
