const user = {id:1 , name : 'Amir khan', job:'Actor'};

const userString = JSON.stringify(user)
console.log(user);
console.log(userString)

const userObj = JSON.parse(userString)
console.log(userObj)

// { id: 1, name: 'Amir khan', job: 'Actor' }
// {"id":1,"name":"Amir khan","job":"Actor"}