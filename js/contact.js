emailjs.init("fQZPg5m3iH9f-qZJ0");

const contactForm =
document.getElementById("contact__form");

const contactMessage =
document.getElementById("contact__message");


contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

emailjs.sendForm(
    "service_qa1vjgj",
    "template_kj9rqhn",
    "#contact__form"
)

.then(()=>{

contactMessage.textContent =
"Message sent successfully";

contactForm.reset();

setTimeout(()=>{

contactMessage.textContent="";

},5000);

})

.catch((error)=>{

console.log(error);

contactMessage.textContent=
"Message failed";

});

});