
// for (let i = 0; i < 100; i++) {
//     for (let j = 2; j <= i; j++) {
//         if (i === j) {
//             console.log(i);
//         }
//         if (i % j === 0) {
//             break;
//         }
//     }
// }
// for (let i = 0; i < 1000; i++) {
//     let r = 0
//     for (let j = 0; j < i; j++) {
//         if (i % j === 0) {
//             r += j
//         }
//     }
//     if (r==i) {
//         console.log(r);
//     }
// }
// const myF = (arg) => {
//     if (isNaN(arg)) {
//         return 0
//     }
//     else {
//         if (arg % 2 == 0) {
//             arg /= 2
//             console.log(arg);
//         }
//         else {
//             arg = arg * 3 + 1
//             console.log(arg);
//         }
//         if (arg <= 1) return 0
//         myF(arg)
//     }
// }
// let a = parseInt(prompt("tiv"))
// myF(a)
// function factorial(n) {
//     if (n == 0) 
//         return 1
//     return n * factorial(n - 1)
// }
// console.log(
//     factorial(5)
// )
// let arr = []
// let images = [
//     "../1x/0.jpg",
//     "../1x/1.jpeg",
//     "../1x/2.png",
//     "../1x/3.jpg",
//     "../1x/4.jpg",
//     "../1x/5.jpg",
//     "../1x/6.jpg",
//     "../1x/7.jpg",
//     "../1x/8.jpg",
//     "../1x/9.jpg"
// ]
// document.getElementById("a").addEventListener("click", () => {
//     let elem = document.createElement("p")
//     elem.innerHTML = "ka"
//     elem.style.color = "red"
//     document.body.appendChild(elem)
// })
// document.getElementById("b").addEventListener("click", () => {
//     let divs = document.querySelectorAll(".g, .b")
//     for (let i = 0; i < divs.length; i++) {
//         document.body.removeChild(divs[i])
//     }
//     let v = parseInt(document.querySelector(".input").value)
//     for (let i = 0; i < v; i++) {
//         let c = document.createElement("br")
//         c.className = "b"
//         document.body.appendChild(c)
//         for (let j = 0; j < v; j++) {
//             let elem = document.createElement("div")
//             elem.className = "g"
//             elem.style.height = "50px"
//             elem.style.width = "50px"
//             elem.style.border = "1px solid"
//             elem.style.display = "inline-block"
//             document.body.appendChild(elem)
//         }
//         setInterval(() => {
//             let divs = document.querySelectorAll(".g")
//             for (let i = 0; i < divs.length; i++) {
//                 let r = Math.floor(Math.random() * 256)
//                 let g = Math.floor(Math.random() * 256)
//                 let b = Math.floor(Math.random() * 256)
//                 divs[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
//             }
//         }, 1000)
//     }
// })
// document.getElementById("c").addEventListener("click", () => {
//     let divs = document.querySelectorAll(".e, .c")
//     for (let i = 0; i < divs.length; i++) {
//         document.body.removeChild(divs[i])
//     }
//     let v = parseInt(document.querySelector(".input").value)
//     for (let i = 0; i < v; i++) {
//         let c = document.createElement("br")
//         c.className = "b"
//         document.body.appendChild(c)
//         for (let j = 0; j < v; j++) {
//             let elem = document.createElement("div")
//             elem.className = "e"
//             elem.style.height = "50px"
//             elem.style.width = "50px"
//             elem.style.border = "1px solid"
//             elem.style.display = "inline-block"
//             document.body.appendChild(elem)
//         }
//         let j = 0
//         console.log(j);
//         setInterval(() => {
//             let divs = document.querySelectorAll(".e")
//             let r = Math.floor(Math.random() * 256)
//             let g = Math.floor(Math.random() * 256)
//             let b = Math.floor(Math.random() * 256)
//             divs[j].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
//             j++
//             console.log(j)
//         }, 1000)
//     }
// })
// function f5() {
//     let v = parseInt(document.querySelector(".input").value)
//     for (let i = 0; i < v; i++) {
//         let c = document.createElement("br")
//         c.className = "d"
//         document.body.appendChild(c)
//         for (let j = 0; j < v; j++) {
//             let elem = document.createElement("div")
//             elem.className = "f"
//             elem.style.height = "50px"
//             elem.style.width = "50px"
//             elem.style.border = "1px solid"
//             elem.style.display = "inline-block"
//             document.body.appendChild(elem)
//         }
//     }
//     let divs = document.querySelectorAll(".f");
//     console.log(divs);
//     for (let i = 0; i < divs.length; i++) {
//         let r = Math.floor(Math.random() * 10)
//         divs[i].addEventListener("click", function () {
//             this.style.backgroundImage = "url(" + images[r] + ")"
//             this.style.backgroundSize = "100%"
//             arr.push(r)
//             console.log(arr);
//             for (let i = 0; i < arr.length; i++) {
//                 for (let j = 0; j < arr.length; j++) {
//                     if (i == j) continue
//                     if (arr[i] == arr[j]) {
//                         console.log("sa");
//                     }
//                 }
//             }
//         })
//     }
// }
// for (let i = 0; i < 10; i++) {
//     document.body.appendChild(document.createElement("br"))
//     let elem = document.createElement("div")
//     elem.className = "image"
//     elem.style.height = "50px"
//     elem.style.width = "50px"
//     elem.style.border = "1px solid"
//     elem.style.display = "inline-block"
//     elem.style.backgroundSize = "100%"
//     elem.style.backgroundImage = "url(" + images[i] + ")"
//     arr.push(i)
//     document.body.appendChild(elem)
// }
// let arr = [];
// for (let i = 0, n = 100; i < n; i++) {
//     arr.push(Math.round(Math.random() * n))
// }
// console.log(arr);
// let z = arr.filter(arr => arr < )

function anun() {
    for (let i = 0; i < 10; i++) {
        let elem = document.createElement('div');
        elem.classList.add('lines');
        elem.style.top = i * 70 + "px";
        document.querySelector('#janapar').appendChild(elem);
    }
}
anun()
function up() {
    let a = document.querySelectorAll('.lines')
    // console.log(a);
    for (let i = 0; i < a.length; i++) {
        let x = parseInt(a[i].style.top) - 20
        a[i].style.top = x + 'px'
        // console.log(a[i].style.top,x);
    }
}
function down() {
    let a = document.querySelectorAll('.lines')
    // console.log(a);
    for (let i = 0; i < a.length; i++) {
        let x = parseInt(a[i].style.top) + 20
        a[i].style.top = x + 'px'
        // console.log(a[i].style.top,x);
    }
}
function upDown() {
    up();
    setTimeout(down, 100)
}
setInterval(upDown, 160)
let avto1 = document.getElementById('avto1');
let a = 0;
function avto() {
    // a += 10;
    // avto1.style.top = a + 'px';
    // // console.log(avto1.style.top);
    // if (a >= 550) {
    //     a = -10
    // }
}
setInterval(avto, 500);
document.body.onkeydown = move;
let b = 0, c = 0
let avto2 = document.getElementById('avto2')
function move(prest) {
    if (prest.keyCode == 37) {
        b += 10
        if (b >= 480) {
            b = 480
        }
        avto2.style.right = b + 'px'
    } else if (prest.keyCode == 38) {
        c += 10
        if (c >= 480) {
            c = 480
        }
        avto2.style.bottom = c + 'px'
    } else if (prest.keyCode == 39) {
        b -= 10
        if (b <= 0) {
            b = 0
        }
        avto2.style.right = b + 'px'
    } else if (prest.keyCode == 40) {
        c -= 10
        if (c <= 0) {
            c = 0
        }
        avto2.style.bottom = c + 'px'
    }
    console.log(avto2.style.right + 'avto2', avto1.style.left + 'avto1',
        avto2.style.bottom + 'avto2', avto1.style.top + 'avto1');
    if (Math.abs(avto2.style.right) - Math.abs(avto1.style.left) == 0 &&
        Math.abs(avto2.style.bottom) - Math.abs(avto1.style.top) == 0) {
        console.log("dagh");
    }
}