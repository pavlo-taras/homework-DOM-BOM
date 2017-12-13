function addElement(tag, listAttributes) {
  var element = document.createElement(tag);
  
  for (attr in listAttributes) {
    element.setAttribute(attr, listAttributes[attr]);
  }

  return element;
}

var form = addElement('form', { name: 'login', action: 'google.com'/*, onSubmit: 'return validateData();'*/});

form.appendChild(addElement('input', { 
  type: 'text',
  name: 'age',
  placeholder: '0',
  title: '[0-9]+',
  pattern: '[0-9]+',
  required: 'required'
}));

form.appendChild(addElement('input', {
  type: 'text',
  name: 'username',
  placeholder: 'user_name',
  title: 'user_[name]',
  pattern: 'user_[A-Za-z0-9-]+',
  required: 'required'
}));

form.appendChild(addElement('input', {
    type: 'text',
    name: 'date',
    placeholder: 'dd/mm/yyyy',
    title: 'dd/mm/yyyy',
    pattern: '(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}',
    required: 'required'
}));

form.appendChild(addElement('input', {type: 'submit', value: 'Validate Me'}));

document.body.appendChild(form);

form.addEventListener('submit', function(event) {
    
  var dateNow = new Date(); 
  var inputDateList = this.elements.date.value.split('/');
  var inputDate = new Date(inputDateList[2], inputDateList[1] - 1, inputDateList[0]);

  if (dateNow.toDateString() !== inputDate.toDateString()) {
    alert('Invalid data. Please enter current date');
    event.preventDefault();
  }
}, false);
