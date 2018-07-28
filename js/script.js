var button = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");


try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

