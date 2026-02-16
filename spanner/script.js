const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
let options = ["Momo", "Chowmein", "Pizza"]; // Default options
let startAngle = 0;
let arc = Math.PI / (options.length / 2);
let spinTimeout = null;

function drawWheel() {
    arc = Math.PI / (options.length / 2);
    ctx.clearRect(0, 0, 400, 400);

    options.forEach((text, i) => {
        const angle = startAngle + i * arc;
        ctx.fillStyle = `hsl(${i * (360 / options.length)}, 70%, 60%)`;
        
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 180, angle, angle + arc, false);
        ctx.lineTo(200, 200);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.translate(200 + Math.cos(angle + arc / 2) * 120, 200 + Math.sin(angle + arc / 2) * 120);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
    });
}

function addOption() {
    const input = document.getElementById("optionInput");
    if (input.value) {
        options.push(input.value);
        input.value = "";
        drawWheel();
        updateList();
    }
}

function updateList() {
    const list = document.getElementById("optionList");
    list.innerHTML = options.map(opt => `<span style="background:#eee; padding:5px; margin:2px; border-radius:3px;">${opt}</span>`).join("");
}

let spinAngleStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;

function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
}

function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawWheel();
    spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
    clearTimeout(spinTimeout);
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    document.getElementById("result").innerHTML = "Aaja ko result: " + options[index];
}

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

drawWheel();
updateList();
// ... (mathiko aru code same hunchha, tala ko functions haru replace garnus)

function updateList() {
    const list = document.getElementById("optionList");
    // List item sangai 'X' button thapeko
    list.innerHTML = options.map((opt, index) => `
        <span class="option-tag">
            ${opt} 
            <button class="delete-btn" onclick="removeOption(${index})">×</button>
        </span>
    `).join("");
}

function removeOption(index) {
    // List bata tyo index ko item hataune
    if (options.length > 2) {
        options.splice(index, 1);
        drawWheel();
        updateList();
    } else {
        alert("Spinner ma kamti ma pani २ वटा options huna parchha!");
    }
}

// ... (baki spin ra draw functions haru same rahanchha)