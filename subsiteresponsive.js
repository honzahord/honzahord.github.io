let grid = document.getElementById("grid2x2");
let gridhtml = grid.innerHTML;

if ($(window).width() < 850) {
    grid.innerHTML = '<a href="index.html">It is advised to view this site on PC</a>';
    grid.classList.add("small");
    grid.classList.remove("grid2x2");
}
else if ($(window).height() < 550) {
    grid.innerHTML = '<a href="index.html">It is advised to resize this site</a>';
    grid.classList.add("small");
    grid.classList.remove("grid2x2");
}
else {
    grid.innerHTML = gridhtml;
    grid.classList.add("grid2x2");
    grid.classList.remove("small");
}
$(window).resize(function () {
    if ($(window).width() < 850) {
        grid.innerHTML = '<a href="index.html">It is advised to view this site on PC</a>';
        grid.classList.add("small");
        grid.classList.remove("grid2x2");
    }
    else if ($(window).height() < 550) {
        grid.innerHTML = '<a href="index.html">It is advised to resize this site</a>';
        grid.classList.add("small");
        grid.classList.remove("grid2x2");
    }
    else {
        grid.innerHTML = gridhtml;
        grid.classList.add("grid2x2");
        grid.classList.remove("small");
    }
})