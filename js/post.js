function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
function displayPost(data) {
    const postContainer = document.getElementById('post-container');
    for (const post of data) {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <h2>User : ${post.id}</h2>
        <h3>Title : ${post.title}</h3>
        <p>Description : ${post.body}</p>
         `;
        console.log(post)
        postContainer.appendChild(div)
    }
}

loadPost()