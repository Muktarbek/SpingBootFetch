const register = document.getElementById('register');
let url = 'http://localhost:8080/api';

register.addEventListener('submit', async function (event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('password_confirm').value;

    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: username,
            password: password,
            age: age
        })
    });
    let answer = await response.name;
    console.log(answer);
});



    function updateUser(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('edit_name').value;
    let password = document.getElementById('edit_password').value;
    let age = document.getElementById('edit_age').value;
    let roles = [];
    if(document.getElementById('role_user1').checked){
        let array = new Object();
        array.id = 1;
        roles.push(array);
    }
    if(document.getElementById('role_admin1').checked){
        let role_a = new Object();
        role_a.id = 2;
        roles.push(role_a);
    }

    fetch('http://localhost:8080/edit',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body :JSON.stringify({
            id:id,
            name:name,
            password:password,
            age:age,
            roles:roles
        })
    })}