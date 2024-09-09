let temperature = 25;
if (temperature > 30) {
    console.log("There is hot outside")
} else if (temperature < 10) {
    console.log("There is cold outside");
} else {
    console.log("The weather outside is moderate")
}

const httpResponse = 404;
switch(httpResponse) {
    case 200:
        console.log("HTTP Success");
        break;
    case 404:
        console.log("HTTP Not Found");
        break;
    default:
        console.log("Unknown HTTP error", httpResponse);
}