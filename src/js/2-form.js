console.log("TEST TEST");

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
    const emailClear = savedMessage.email.trim();
    const messageClear = savedMessage.message.trim()


    if (emailClear && messageClear) {
        savedMessage.email = emailClear;
        savedMessage.message = messageClear
        console.log(savedMessage);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
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