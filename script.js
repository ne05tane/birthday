
const images = [
    "assets/chocofudge.png",
    "assets/chocomilk.png",
    "assets/flowercake.png",
    "assets/mintcupcake.png",
    "assets/swissroll.png",
    
];

const grid = document.getElementById("grid");
const preview = document.getElementById("preview");
const names = document.getElementById("name");

images.forEach(file => {
    const btn = document.createElement("button");
    const img = document.createElement("img");
    img.src = file;
    img.alt = file.replace("png", "");
    btn.appendChild(img);
    btn.addEventListener("click", () => {
        preview.src = file;
        names.textContent = file.split("/").pop().replace(".png", "");
        grid.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
    grid.appendChild(btn);

});





