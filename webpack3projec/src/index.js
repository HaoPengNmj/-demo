import "./index.scss";
import { Rect, Snake,linkWordStr } from "./utils/utils.js";
// "node-sass": "^4.7.2",

//var el = document.getElementById("app");
//el.textContent = linkWordStr("snake", "game");
window.addEventListener("resize", () => {
    canvas.width = ~~(window.innerWidth / 40) * 40;
    canvas.height = ~~(window.innerHeight / 40) * 40;
});
// window.onresize = function () {
//     canvas.width = Math.floor(window.innerWidth / 40) * 40;
//     canvas.height = Math.floor(window.innerHeight / 40) * 40;
// }
var canvas = document.getElementById('canvas');
canvas.width = Math.floor(window.innerWidth / 40) * 40;
canvas.height = Math.floor(window.innerHeight / 40) * 40;
var ctx = canvas.getContext('2d');

let mySnake = new Snake(4, ctx, canvas.width, canvas.height);
let food = createFood();
food.draw(ctx);
mySnake.draw();

// window.requestAnimationFrame = window.requestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.msRequestAnimationFrame;

// (function startGame(){
//     if (mySnake.isKnockWall()){
//         alert("game over");
//         return;
//     }
//     var iseat = mySnake.isEating(food);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     if (iseat)
//         food = createFood();
//     food.draw(ctx);
//     mySnake.move(iseat).draw();
//     requestAnimationFrame(startGame);
// })();                              

var timer = setInterval(function () {
    if (mySnake.isKnockWall()) {
        clearInterval(timer);
        alert("game over");
        return;
    }
    var iseat = mySnake.isEating(food);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (iseat)
        food = createFood();
    food.draw(ctx);
    mySnake.move(iseat).draw();
}, 200);

function createFood() {
    //判断不与蛇重合
    let rx = Math.floor(Math.random() * (canvas.width / 40)) * 40;
    let ry = Math.floor(Math.random() * (canvas.height / 40)) * 40;
    return new Rect(rx, ry, 40, 40, "#d9db64").draw(ctx);
}

document.onkeydown = function (e) {
    var ev = e || window.event;
    switch (ev.keyCode) {
        case 37://l
            {
                if (mySnake.state !== "r") {
                    mySnake.state = "l";
                }
                break;
            }
        case 38://u
            {
                if (mySnake.state !== "d") {
                    mySnake.state = "u";
                }
                break;
            }
        case 39://r
            {
                if (mySnake.state !== "l") {
                    mySnake.state = "r";
                }
                break;
            }
        case 40://d
            {
                if (mySnake.state !== "u") {
                    mySnake.state = "d";
                }
                break;
            }
    }
    ev.preventDefault();
}

// if (mySnake.isKnockWall()) {
    //     clearInterval(timer);
    //     alert("game over");
    // }
    // else {
    //     var iseat = mySnake.isEating(food);
    //     if (iseat) {
    //         food.clear(ctx);
    //         food = createFood();
    //     }
    //     mySnake.move(iseat);
    // }