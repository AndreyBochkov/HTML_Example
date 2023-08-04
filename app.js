let prs = [document.querySelector(".progress progress"),
document.querySelector(".progress t")];
let clicks = 0;
let body = document.querySelector("body");
let temp = localStorage.getItem("pranked");
let x = 0;
let y = 0;
let clip_id, tickle_id;
let clipsize = 1000;

document.onmousemove = (event) => {
    x = event.clientX;
    y = event.clientY;
};

if (temp != null) {
    prs[0].value = 100;
    prs[1].style.color = "red";
    prs[1].innerHTML = "БУМ!";
    tickle_id = setInterval(() => {
        prs[1].style.top = `${Math.random()*5-2.5}px`;
        prs[1].style.left = `${Math.random()*5-2.5}px`;
    }, 50);
    clipsize = 0;
    init_prank();
    clicks = 31;
}

document.querySelector(".progress button").onclick = () => {
    if (clicks <= 30) {
      clicks ++;
    }
    if (clicks <= 10) {
        prs[0].value += 10;
        prs[1].innerHTML = `Загрузка: ${clicks*10}%`;
    } else if (clicks > 10 & clicks < 30) {
        prs[1].innerHTML = `Загрузка: ${clicks*10}%`;
    } else if (clicks == 30) {
        prs[1].innerHTML = "БУМ!";
        init_prank();
        localStorage.setItem("pranked", "yeah");
    }
    
    if (clicks == 11) {
        prs[1].style.color = "orange";
        tickle_id = setInterval(() => {
            prs[1].style.top = `${Math.random()*5-2.5}px`;
            prs[1].style.left = `${Math.random()*5-2.5}px`;
        }, 100);
    } else if (clicks == 21) {
        prs[1].style.color = "red";
        clearInterval(tickle_id);
        tickle_id = setInterval(() => {
            prs[1].style.top = `${Math.random()*5-2.5}px`;
            prs[1].style.left = `${Math.random()*5-2.5}px`;
        }, 50);
    }
};

function init_prank() {
    document.onmousemove = (event) => {
        x = event.clientX;
        y = event.clientY;
        body.style.clipPath = `circle(${clipsize}px at ${x}px ${y + scrollY}px)`;
    };

    clip_id = setInterval(() => {
        if (clipsize > 50) {
            clipsize /= 1.01;
        } else {
            clipsize = 50;
            clearInterval(clip_id);
        }
        document.onmousemove({clientX:x,clientY:y,});
    }, 10);
}

document.getElementById("files_do").onclick = () => {
    open("experiment2/exp2.py");
}