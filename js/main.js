const numeros = document.querySelectorAll(".num");
const input = document.querySelector(".input");
const clear = document.querySelector(".clear")

numeros.forEach(num => {
    num.addEventListener("click", function () {
        input.value += num.value;
    });
});

clear.addEventListener("click", function () {
    input.value = "";
});
