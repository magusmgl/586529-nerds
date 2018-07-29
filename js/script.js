var button = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var username = popup.querySelector(".username");
var email = popup.querySelector(".email");
var form = popup.querySelector(".feedback-form");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        username.value = storage;
        email.focus();
    } else {
        username.focus();
    }
});

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!username.value) {
        evt.preventDefault()
    } else if (isStorageSupport) {
        localStorage.setItem("username", username.value);
    }
})

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});