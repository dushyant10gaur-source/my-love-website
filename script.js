const hearts = document.querySelector(".hearts");

setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    
    hearts.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}, 300);
