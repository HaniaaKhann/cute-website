const button1 = document.querySelector('.my-button1');
const button2 = document.querySelector('.my-button2');
const p = document.querySelector('p');

let size = 16;

button2.addEventListener("mouseenter", () => {
    button2.style.position = "absolute";

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    button2.style.left = x + "px";
    button2.style.top = y + "px";

    // Increase YES button size every time NO is hovered
    size += 5;
    button1.style.fontSize = size + "px";
});

button1.addEventListener('click', () => {
    p.textContent = "sliding in your dm, just a sec! 💌";
});