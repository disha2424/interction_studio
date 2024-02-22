document.querySelectorAll(".image-button").forEach(function(button, index) {
    button.addEventListener("click", function() {
        openModal(index);
    });
});

function openModal(index) {
    let modal = document.querySelectorAll(".modal")[index];
    modal.style.display = "block";
}

document.querySelectorAll(".close-button").forEach(function(button) {
    button.addEventListener("click", closeModal);
});

function closeModal() {
    document.querySelectorAll(".modal").forEach(function(modal) {
        modal.style.display = "none";
    });
}