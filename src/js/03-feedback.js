import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");
    
const formData = {};

 formEl.addEventListener("submit", onSubmitForm);
 formEl.addEventListener("input", throttle(onInput, 500));

 populateTextarea();

 function onSubmitForm(event){
    event.preventDefault();

    console.log(`Your email: ${formEl.email.value}`);
    console.log(`Your message: ${formEl.message.value}`);

    event.currentTarget.reset();    

    localStorage.removeItem(STORAGE_KEY);
};

 function onInput(event){

    formData[event.target.name]= event.target.value; 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
   
 };

function populateTextarea(){

    const savedMessage = localStorage.getItem(STORAGE_KEY);

    const parsedMessage = JSON.parse(savedMessage);

    if(parsedMessage){     
       formEl.email.value = parsedMessage.email;
       formEl.message.value = parsedMessage.message;
    }
};