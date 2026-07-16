function handleClick() {
    const heading = document.getElementById("heading");
    heading.innerText = "Welcome";
    heading.style.backgroundColor = "yellow";

    const paragraphs = document.querySelectorAll(".text");
    paragraphs.forEach(function(p) {
        p.style.color = "crimson";
        p.style.fontWeight = "bold";
        p.innerText = "All Change";
    });
}