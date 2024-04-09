const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input")

const STORAGE_KEY = "feedback-message";

populateInfo();

form.addEventListener("input", event => {

    event.preventDefault();
    
    const formValues = {
        email: form.email.value,
        message: form.message.value
    }
 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));

});

 
form.addEventListener("submit", event => {
   
    event.preventDefault();
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    if (form.email.value && form.message.value) {
        console.log("email: ", form.email.value);
        console.log("message: ", form.message.value);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log("message sent");
        window.alert("message sent");
    } else {
        window.alert("fill in empty fields");
    };
});

function populateInfo() {
    const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

       if (savedInfo) {
            input.value = savedInfo.email;
            textarea.value = savedInfo.message;
        };
    
};





   
// }