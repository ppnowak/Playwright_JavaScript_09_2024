const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const getApiResponse = () => new Promise((resolve, reject) => {
//     sleep(2000).then(() => {
//         const success = true;
//         if (success) {
//             const response = { status: 200, json: { time: new Date() }};
//             resolve(response);
//         } else {
//             const response = { status: 404, json: { error: "Not Found" }};
//             reject(response)
//         }
//     })
// });

const getApiResponse = async () => {
    await sleep(2000);
    const success = false;
    if (success) {
        const response = { status: 200, json: { time: new Date() }};
        return response;
    }
    throw new Error("Not found!");
    // const errorResponse = { status: 404, json: { error: "Not Found" }};
    // return errorResponse;
}

(async()=>{

    // const responsePromise = getApiResponse();
    // console.log(await responsePromise);
    // const func = () => {}
    // await func();

    try {
        const response = await getApiResponse();
        console.log(`API response is ${response.status} and json is`, response.json)
    } catch (error) {
        console.error("Error occured", error);
    }

})();