const getImmediateApiResponse = () => {
    const success = true;
    if (success) {
        const response = { status: 200, json: { time: new Date() }};
        return response;
    } else {
        const response = { status: 404, json: { error: "Not Found" }};
        return response;
    }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getApiResponse = () => new Promise((resolve, reject) => {
    sleep(2000).then(() => {
        const success = true;
        if (success) {
            const response = { status: 200, json: { time: new Date() }};
            resolve(response);
        } else {
            const response = { status: 404, json: { error: "Not Found" }};
            reject(response)
        }
    })
});

const response = getApiResponse();
console.log(response);

getApiResponse()
    .then((response) => {
        console.log("Response", response.status, response.json.time);
    })
    .catch((errorResponse) => {
        console.log("Error occured", errorResponse.status, errorResponse.json.error);
    })
    .finally(() => {
        console.log("Promise is fulfilled");
    });

// page.goto("url").then(() => {
//     page.locator("locator").click().then(() => {

//     });
// })