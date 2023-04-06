import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateTextarea();

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedMessage) {
    form.email.value = savedMessage.email;
    form.message.value = savedMessage.message;
  }
}

function onFormInput() {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log('email: ', event.target.email.value);
  console.log('message: ', event.target.message.value);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
