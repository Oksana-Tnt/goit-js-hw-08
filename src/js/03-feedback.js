import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");
    
let formData = {};

 formEl.addEventListener("submit", onSubmitForm);
 formEl.addEventListener("input", throttle(onInput, 500));
 

 function onSubmitForm(event){
    event.preventDefault();

    console.log(formData);

    formData = {}; 

    event.currentTarget.reset();    

    localStorage.removeItem(STORAGE_KEY);
};

 function onInput(event){

    formData[event.target.name]= event.target.value; 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
   
 };

const onLoad = () => {
    try {
        const data = localStorage.getItem (STORAGE_KEY);
        if(!data) return;
        formData = JSON.parse(data);
        Object.entries(formData).forEach(([key, val]) => {
            formEl.elements[key].value = val;
        });
    }catch (error){
        console.log(error.message);
    }
};

window.addEventListener("load", onLoad);
