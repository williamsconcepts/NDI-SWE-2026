async function getAllPosts() {
    try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();

    console.log(data)
}catch(err) {
    console.log(err)
}

}
getAllPosts()