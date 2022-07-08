const createUser = (object) => {
    return fetch('http://jsonplaceholder.typicode.com/users',
        {
            method:'POST',
            body: JSON.stringify(object),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())

}
export {createUser};