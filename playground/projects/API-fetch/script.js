const parallelBtn =
document.querySelector("#parallel-btn");

const sequentialBtn =
document.querySelector("#sequential-btn");

const parallelOutput =
document.querySelector("#parallel-output");

const sequentialOutput =
document.querySelector("#sequential-output");


// =====================================
// PARALLEL REQUESTS
// =====================================

async function getParallelData() {

    try {

        parallelOutput.innerHTML =
            "<p>Loading...</p>";

        const start = performance.now();

        const responses = await Promise.all([
            fetch(
                "https://jsonplaceholder.typicode.com/users?id=2"
            ),
            fetch(
                "https://jsonplaceholder.typicode.com/posts?id=3"
            ),
            fetch(
                "https://jsonplaceholder.typicode.com/comments?id=1"
            )
        ]);

        const data = await Promise.all(
            responses.map(
                response => response.json()
            )
        );

        const end = performance.now();

        const [user, post, comment] = data;

        parallelOutput.innerHTML = `
            <p>
                Time:
                ${(end - start).toFixed(2)} ms
            </p>

            <div class="data-box">
                <strong>User</strong>
                <p>${user[0].name}</p>
            </div>

            <div class="data-box">
                <strong>Post</strong>
                <p>${post[0].title}</p>
            </div>

            <div class="data-box">
                <strong>Comment</strong>
                <p>${comment[0].name}</p>
            </div>
        `;

    } catch(error) {

        console.error(error);

        parallelOutput.innerHTML =
            "<p>Error loading data</p>";
    }
}


// =====================================
// SEQUENTIAL REQUESTS
// =====================================

async function seqRequests() {

    try {

        sequentialOutput.innerHTML =
            "<p>Loading...</p>";

        const start = performance.now();

        const users =
            await fetch(
                "https://jsonplaceholder.typicode.com/users?id=4"
            );

        const userData =
            await users.json();

        const posts =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts?id=5"
            );

        const postData =
            await posts.json();

        const albums =
            await fetch(
                "https://jsonplaceholder.typicode.com/albums?id=2"
            );

        const albumData =
            await albums.json();

        const end = performance.now();

        sequentialOutput.innerHTML = `
            <p>
                Time:
                ${(end - start).toFixed(2)} ms
            </p>

            <div class="data-box">
                <strong>User</strong>
                <p>${userData[0].name}</p>
            </div>

            <div class="data-box">
                <strong>Post</strong>
                <p>${postData[0].title}</p>
            </div>

            <div class="data-box">
                <strong>Album</strong>
                <p>${albumData[0].title}</p>
            </div>
        `;

    } catch(error) {

        console.error(error);

        sequentialOutput.innerHTML =
            "<p>Error loading data</p>";
    }
}


// =====================================
// EVENT LISTENERS
// =====================================

parallelBtn.addEventListener(
    "click",
    getParallelData
);

sequentialBtn.addEventListener(
    "click",
    seqRequests
);