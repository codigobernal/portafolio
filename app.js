const imageModal = document.getElementById("imageModal");
imageModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const imageUrl = button.getAttribute("data-bs-image");
  const modalImage = document.querySelector("#imageModal .modal-body img");
  modalImage.src = imageUrl;
});
