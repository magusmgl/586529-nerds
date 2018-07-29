var button = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
})

close.addEventListener("click", fu)