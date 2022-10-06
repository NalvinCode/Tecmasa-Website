//Send mail with information
function makeEmail(){
    var url = 'http://localhost:5000/sendMail';
    let message = {
        "name" : nameForm.value,
        "lastName" : lastNameForm.value,
        "email" : emailForm.value,
        "phone" : phoneForm.value,
        "message": messageForm.value
    }

    fetch(url, {
    method: 'POST',
    body: JSON.stringify(message),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}