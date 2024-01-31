const form = document.getElementById('registrationForm');
const clearFormButton = document.getElementById('clearForm');
const nameInput = document.getElementById('name');
const team_name = document.getElementById('team_name');
const members = document.getElementById('number');
const phone = document.getElementById('phone');
const alt_phone = document.getElementById('alt_phone');
const college = document.getElementById('college');
const link = document.getElementById('link');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  

  if (nameInput.value.length < 3) {
    alert('Please enter a valid name.');
    return;
  }
  if (team_name.value.length <2) {
    alert('Please enter a valid name.');
    return;
  }

  if (!validatePhoneNumber(phone.value)) {
    alert('Please enter a valid phone number.');
    return;
  }
  if (!validatePhoneNumber(alt_phone.value)) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (college.value.length < 3) {
    alert('Please enter a valid college name.');
    return;
  }

  if (!validateUrl(link.value)) {
    alert('Please enter a valid drive link.');
    return;
  }

  alert('Form submitted successfully!');

  nameInput.value = '';
  team_name.value = '';
  members.value = 0;
  phone.value = '';
  alt_phone.value = '';
  college.value = '';
  link.value = '';
  
});

function validatePhoneNumber(phone) {
  const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return re.test(phone);
}

function validateUrl(url) {
  const re = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:\d+)?(\/|\/(\w+\.\w+)+(\w+(\/\w+)*)?(\?(\w+)=(\w+))?(&(\w+)=(\w+))*)?/;
  return re.test(url);
}


clearFormButton.addEventListener('click', () => {
  nameInput.value = '';
  team_name.value = '';
  members.value = null;
  phone.value = '';
  alt_phone.value = '';
  college.value = '';
  link.value = '';
});
