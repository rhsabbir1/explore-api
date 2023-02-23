function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
function displayPost(data){
    for(const post of data){
        console.log(post)
    }
}

loadPost()