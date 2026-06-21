const pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index) {
    pages.forEach(page => page.classList.remove("active"));
    pages[index].classList.add("active");
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function startAlbum() {
    document.getElementById("bgMusic").play();
    currentPage = 1;
    showPage(currentPage);
}

showPage(currentPage);