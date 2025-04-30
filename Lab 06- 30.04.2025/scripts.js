document.getElementById("button").onclick = function () {
    const secret = 7;
    let number;
    number = document.getElementById("text").value;
    number = Number(number);

    let condition = true;
    let attempt = 0;
    while (condition) {
        if (number === secret) {
            alert("Congratulations! You guessed the secret number in " + attempt + " attempts.");
            condition = false;
        }
        else if (number > secret) {
            alert("The number is greater than the secret number");
            number = prompt("Enter a number");
            number = Number(number);
        }
        else if (number < secret) {
            alert("The number is less than the secret number");
            number = prompt("Enter a number");
            number = Number(number);
        }
        else {
            alert("Please enter a valid number");
            number = prompt("Enter a number");
            number = Number(number);
        }
        attempt++;
    }
} 

document.getElementById("js").onclick = function () {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}