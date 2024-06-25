let personName :string ='';

personName = prompt('What is your name?') || '';

if(personName !== null && personName !==''){
    alert(`Hello ${personName}, would you like to run some python today?`)
}
else {
    alert('you have to fill your name !')
}