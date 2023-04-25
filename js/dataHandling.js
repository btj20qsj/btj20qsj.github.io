function handleSubmission(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const value = Object.fromEntries(formData.entries());
    fetch('assets/people.json')
    .then(function (response) {return response.json();})
    .then(function (data) 
    {
        var i = data.length + 1;
        formData.staffNum = i;
        console.log([value]);
    })
    .catch(function (err) {console.log('error: ' + err);}); 
}
document.Cookie =  "SameSite=lax";
const form = document.querySelector('form');
form.addEventListener('submit',handleSubmission);