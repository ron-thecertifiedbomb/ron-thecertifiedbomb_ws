// custom script
// alert('Welcome to JS')

const btnSuccessOnClick = document.getElementById("btnSuccessOnClick");
console.dir(btnSuccessOnClick);

// eventHandlers
const changePicHandler = function (e, last, first) {
    // function changePicHandler (e) {
    // 1. get ref of the img tag
    // 2. set the src attrib to something else
    // 3. I only have 4 images (01 ... 04.jpg)
    // 4. the image should be randomly selected
    // 5. naming template [01-04].jpg
    console.log({ e, last, first });
    let max = last;
    let min = first;
    const img = document.getElementById("imgTarget");
    if (img) {
        let oldImage = img.src.split("/").pop().split(".").shift();
        let newImage;
        do {
            newImage = generateNumber(max, min).toString().padStart(2, "0");
        } while (oldImage == newImage);
        img.src = `./img/${newImage}.jpg`;
        img.style.border = `10px solid #${oldImage * 12}${newImage * 15}01`;
    }
};

function onEyeClick(pw) {
    let pwi = document.querySelector(`#${pw}`);
    let eye = pwi.nextElementSibling.firstElementChild;

    if (pwi.getAttribute("type") == "password") {
        pwi.setAttribute("type", "text");
        eye.setAttribute("class", "fa-solid fa-eye");
        return true;
    }
    pwi.setAttribute("type", "password");
    eye.setAttribute("class", "fa-solid fa-eye-slash");
}

// helpers
const generateNumber = function (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};

// handlers
// 1. Event: click, onclick
const btnChangePic = document.getElementById("btnChangePic");
console.log(btnChangePic);
// btnChangePic.addEventListener('click', changePicHandler);
btnChangePic.addEventListener("click", (event) =>
    changePicHandler(event, 5, 1)
);

// 2. Mouse: mouseover, mouseout, onmouseover, onmouseout
const img = document.getElementById("imgTarget");
if (img) {
    img.addEventListener("mouseover", (event) => changePicHandler(event, 5, 1));
}

if (btnChangePic) {
    btnChangePic.addEventListener("mouseover", () => {
        btnChangePic.innerText = "I am currently hovered.";
        btnChangePic.classList.replace(
            "btn-outline-warning",
            "btn-outline-danger"
        );
    });
    btnChangePic.addEventListener("mouseout", () => {
        btnChangePic.innerText = "Change Pic AddEventListener";
        btnChangePic.classList.replace(
            "btn-outline-danger",
            "btn-outline-warning"
        );
    });
}

// 3. Mouse: mousedown, mouseup, onmousedown, onmouseup
const revealPasswordHandler = (id) => {
    const target = document.getElementById(id);
    if (target) {
        target.setAttribute("type", "text");
    }
};
const hidePasswordHandler = (id) => {
    const target = document.getElementById(id);
    if (target) {
        target.setAttribute("type", "password");
    }
};
const btnEye = document.getElementById("btnEye");
if (btnEye) {
    btnEye.addEventListener("mousedown", () => {
        revealPasswordHandler("pw");
        btnEye.firstElementChild.setAttribute("class", "fa-solid fa-eye");
    });
    btnEye.addEventListener("mouseup", () => {
        hidePasswordHandler("pw");
        btnEye.firstElementChild.setAttribute("class", "fa-solid fa-eye-slash");
    });
}
console.dir(btnEye);

// 4. Input: onfocus, focus
const pwInput = document.getElementById("pw");
console.dir(pwInput);
if (pwInput) {
    pwInput.addEventListener("focusin", (event) => {
        event.target.classList.add("border");
        event.target.classList.add("border-5");
        event.target.classList.replace("border-success", "border-primary");
    });
    pwInput.addEventListener("focusout", (event) => {
        event.target.classList.replace("border-primary", "border-success");
    });
}

// ================================
const jajankenEngine = (hand1, hand2) => {
    let winner; // 1 if hand1 wins; 0 if draw; -1 if hand2 wins;
    switch (hand1) {
        case "rock":
            winner = hand2 == "paper" ? -1 : hand2 == "scissors" ? 1 : hand2 == "rock" ? 0 : null;
            break;
        case "paper":
            winner = hand2 == "paper" ? 0 : hand2 == "scissors" ? -1 : hand2 == "rock" ? 1 : null;
            break;
        case "scissors":
            winner = hand2 == "paper" ? 1 : hand2 == "scissors" ? 0 : hand2 == "rock" ? -1 : null;
            break;
        default:
            winner = 0;
    }
    winner = jajanken[hand1][hand2] ?? 0;
    return winner;
};

const jajanken = {
    rock: {
        paper: -1,
        rock: 0,
        scissors: 1,
    },
    paper: {
        paper: 0,
        rock: 1,
        scissors: -1,
    },
    scissors: {
        paper: 1,
        rock: -1,
        scissors: 0,
    },
};
