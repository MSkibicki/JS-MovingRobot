const robot = document.querySelector(".robot");
const info = document.querySelector(".info");

const move = (e) => {   
    info.textContent = `Współrzędne x: ${robot.offsetLeft}, y: ${robot.offsetTop}`;
    switch (e.keyCode) {
        case 37:
            robot.style.left = robot.offsetLeft - 28 + "px";
            break;
        case 38:
            robot.style.top = robot.offsetTop - 28 + "px";
            break;
        case 39:
            robot.style.left = robot.offsetLeft + 28 + "px";
            break;
        case 40:
            robot.style.top = robot.offsetTop + 28 + "px";
            break;
        case 32:
            const red = Math.floor(Math.random() * 256) // 0-255
            const green = Math.floor(Math.random() * 256) // 0-255
            const blue = Math.floor(Math.random() * 256) // 0-255
            robot.style.backgroundColor = "rgb("+red+"," + green + "," + blue + ")";
            break;
    }
}

window.addEventListener("keydown", move)