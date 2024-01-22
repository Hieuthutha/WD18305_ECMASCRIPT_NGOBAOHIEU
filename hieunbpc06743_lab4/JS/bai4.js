let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1!"), 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2!"), 1000);
});

async function executePromises() {
    try {
        const value1 = await promise;
        console.log(value1);

        const value2 = await promise2;
        console.log(value2);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Gọi hàm executePromises
executePromises();
