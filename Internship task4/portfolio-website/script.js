document.getElementById("contactForm").addEventListener("submit",function(e){
    e.preventDefault();

    document.getElementById("successMessage").innerText =
    "Message sent successfully!";
});