const axios = require('axios');
const registers = require('./registers');

function registerUser(user) {
    return axios({
        method: 'post',
        url: 'https://api-treina.rz2.com.br/admin/users',
        data: {
            data: user
        },
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyejJfYXV0ZW50aWNhY2FvIiwiZGF0YSI6eyJjb21wYW55SWQiOjE2MTIsInVzZXJJZCI6NDg4ODQsIm5hbWUiOiJDaHJpc3RpYW4gRnJpdHNjaCIsImVtYWlsIjoiY2hyaXN0aWFuQHJ6Mi5jb20uYnIiLCJwbGF0Zm9ybSI6IndlYiIsInByb2R1Y3QiOiIxMCIsImxhbmd1YWdlIjoiYnIiLCJ0aW1lem9uZSI6IkFtZXJpY2FcL1Nhb19QYXVsbyIsInJ6Ml9hZG1pbiI6dHJ1ZSwicnoyX3R5cGUiOiJ0Iiwib3MiOm51bGwsImFwcCI6bnVsbCwiZXJyb3IiOm51bGx9LCJpYXQiOjE1NjgzMjEyMDMsIm5iZiI6MTU2ODMyMTIwMywiZXhwIjoxNTY4NDA3NjAzfQ.jJomCa_7DlvxrTyhojqwHqutUu_jc0mjeBHN3talyDw',
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*'
        }
    });
}
const index = process.argv[2];
registerUser(registers[index])
    .then(function(response) {
        console.log(index, 'ok', response.data.userId);
    }).catch(function (error) {
        console.log(index, 'error', error.response.status, error.response.statusText, registers[index].name, registers[index].email);
    });



