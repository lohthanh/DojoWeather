var cookieBox = document.querySelector(".cookie");

function hide() {
    cookieBox.remove();
}

var degrees = document.querySelectorAll(".left-degree, .right-degree");
 

function toFahrenheit (temp) {
   return ((temp * 9/5) + 32).toPrecision(2)
}

function toCelcius (temp) {
    return ((temp - 32) * 5/9).toPrecision(3)
}

function tempChange (tempType) {
    for (var i = 0; i < degrees.length; i++) {
        var degree = degrees[i]
        if (tempType == "fahrenheit") {
            degree.innerText = toFahrenheit(degree.innerText)
        } else {
            degree.innerText = toCelcius(degree.innerText)
        }
    }
}