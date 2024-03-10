// Função para abrir o modal de imagem
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Função para fechar o modal de imagem
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Feche o modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
