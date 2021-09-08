
function getValues() {
    // Obtain Values from user input
    let fizzVal = document.getElementById("fizzValue").value;
    let buzzVal = document.getElementById("buzzValue").value;

    // parse values
    fizzVal = parseInt(fizzVal);
    buzzVal = parseInt(buzzVal);

    // check that the values are integers
    if(Number.isInteger(fizzVal) && Number.isInteger(buzzVal)) {
        let numbers = fizzBuzz(fizzVal, buzzVal);
        displayData(numbers);
    } else {
        alert("Please enter a number");
    }
}


function fizzBuzz(fizzVal, buzzVal) {
    let returnArray = [];

    for (let index = 1; index <= 100; index++) {
        if (index % fizzVal == 0 && index % buzzVal == 0) {
            returnArray.push("FizzBuzz");
        } else if (index % fizzVal == 0){
            returnArray.push("Fizz");
        } else if (index % buzzVal == 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(index);
        }
    }
    return returnArray;
}



function displayData(numbers) {
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");

    // clear the table
    tableBody.innerHTML = "";

    for (let i = 0; i < numbers.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(numbers[i]);
        rowCols[0].textContent = numbers[i];

        rowCols[1].classList.add(numbers[i + 1]);
        rowCols[1].textContent = numbers[i + 1];

        rowCols[2].classList.add(numbers[i + 2]);
        rowCols[2].textContent = numbers[i + 2];

        rowCols[3].classList.add(numbers[i + 3]);
        rowCols[3].textContent = numbers[i + 3];

        rowCols[4].classList.add(numbers[i + 4]);
        rowCols[4].textContent = numbers[i + 4];

        tableBody.appendChild(tableRow);
        
    }

}