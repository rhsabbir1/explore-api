function loadUser3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData (users){
    const ul = document.getElementById('ul-continer');
    for(const user of users){
        console.log(user)
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    }
}