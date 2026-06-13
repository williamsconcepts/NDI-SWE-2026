/**
 * Step 1: fetch() returns Promises Each fetch() call immediately returns a Promise.
 * 
 * Step 2: Promise.all() Promise.all() takes an array of Promises and waits for all of them to complete. When all requests finish, it returns an array of results.
 * 
 * 

 */


// Create an async function
async function parallelRequests() {

  // Make 3 GET requests in parallel (all start at the same time)
  const responses = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/comments")
  ]);

  // Convert each Response object into JSON
  // response.json() also returns a Promise,
  // so we use Promise.all() again to wait for all conversions
  const data = await Promise.all(
    responses.map(response => response.json())
  );

  // Display the results
  console.log(data);
}

// Invoke the function
parallelRequests();

//or 

async function parallelRequests() {

  // Fetch all resources in parallel
  const [usersResponse, postsResponse, commentsResponse] =
    await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments")
    ]);

  // Convert all responses to JSON in parallel
  const [users, posts, comments] =
    await Promise.all([
      usersResponse.json(),
      postsResponse.json(),
      commentsResponse.json()
    ]);

  console.log(users);
  console.log(posts);
  console.log(comments);
}

parallelRequests();





// sequential 

/**
 * Write another function that makes 3 sequential GET requests to jsonplaceholder
 */

async function seqRequests() {
  try {
    // Get Users by Id, wait for user request to finish
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users?id=4",
    );
    // convert response to JSON and log the result
    console.log(await users.json());


    // Get Posts by Id, wait for post request to finish
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts?id=5",
    );
    // convert response to JSON and log the result
    console.log(await posts.json());


    // Get Albums by Id
    const albums = await fetch(
      "https://jsonplaceholder.typicode.com/albums?id=2",
    );
    // convert response to JSON and log the result
    console.log(await albums.json());

    
  } catch (err) {
    // else handle any error that might occur
    console.log(err);
  }
}

seqRequests(); // This request runs one after another
