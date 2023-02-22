function shodData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showDataTable(data))
}

function showDataTable(data) {
    const div = document.getElementById('show-data-table');

    for (const user of data) {
        console.log(user)
        const ul = document.createElement('ul');
        ul.innerHTML = `
        
                <h1>Name : ${user.name}</h1>
                <li>Email : ${user.email}</li>
                <li>Phone : ${user.phone}</li>
                
        `;
        div.appendChild(ul)
    }
}