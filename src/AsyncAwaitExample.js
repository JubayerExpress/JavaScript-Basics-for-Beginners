function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function fetchData() {
    let data = await getData();
    console.log(data);
}

fetchData();

