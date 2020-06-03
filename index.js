document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();     // to prevent browser default behaviour

    document.querySelector("#message-form").classList.add("hide");  // hide this card panel
    document.querySelector("#link-form").classList.remove("hide"); // show this card panel

    const input = document.querySelector("#message-input");
    const encypted = btoa(input.value);

    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}#${encypted}`;
    linkInput.select();

});

// extract the hash from the url
const { hash } = window.location;

// Decode the hash message into ASCII
const message = atob(hash.replace("#", ""));

// Show the message on html

if(message){
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector(".message-show").classList.remove("hide");

    document.querySelector("h1").innerHTML = message;
}
