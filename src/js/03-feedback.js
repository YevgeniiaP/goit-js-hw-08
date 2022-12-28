import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener(`input`, throttle(onFormInput, 500));
form.addEventListener(`submit`, onFormSubmit);

const formData = {};

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}


function getTextStorage() {
    let saveInput = localStorage.getItem(STORAGE_KEY);

    if (!saveInput) {
            return;
    }
    console.log(saveInput)
    Object.entries(saveInput).forEach(element => {
        form.elements[element].value = data[element];
    });
    }; getTextStorage();

