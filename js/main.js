console.log("Estou dentro do main.js");

// let num = 2;

// if (num > 3) {
//   console.log("Maior que 3");
// } else {
//   console.log("menor ou igual a 3");
// }

// console.log(window.document);
// Abre popup com mensagem
// window.alert("Hello");
// alert("Hello");
// Pega documento HTML
// window.document;
// console.log(document);

// Pela elemento com o id referente
// const titulo = document.getElementById("titulo-principal");
// console.log(titulo);
// Imprime texto que está dentro do elemento
// console.log(titulo.innerText);
// Altera texto dentro do elemento
// titulo.innerText = "Batata";
// console.log(titulo.innerText);
// Imprime text + html que está dentro do elemento
// console.log(titulo.innerHTML);
// Altera text + html que está dentro do elemento
// titulo.innerHTML = "<h2>Arroz</h2>";

// console.log(titulo.innerHTML);
// console.log(titulo.innerText);

// Pega todos os elementos que possuem essa classe
// const titulos = document.getElementsByClassName("azul");
// console.log(titulos);
// Pega primeiro elemento da listagem
// titulos[0].innerText = "Primeiro da lista";
// titulos[1].innerText = "Segundo da lista";
// Mapeia lista com elementos
// for (const elemento of titulos) {
//   elemento.innerText = "Classe azul";
// }
// ! Não funciona na lista de elementos
// titulos.map((elemento) => console.log(elemento));
// titulos.forEach((elemento) => console.log(elemento));

// Pega primeiro elemento que encontrar de acordo com o seletor
// const elem = document.querySelector(".azul");
// console.log(elem);

// Pega todos os elementos de acordo com o seletor
// const elems = document.querySelectorAll("h1");
// console.log(elems);

// const titulo = document.getElementById("titulo-principal");

// // Altera a estilização
// titulo.style.color = "red";
// titulo.style.backgroundColor = "blue";
// titulo.style.fontSize = "20px";

// // Adiciona classe do elemento
// titulo.classList.add("azul");
// // Remove classe do elemento
// titulo.classList.remove("azul");
// // Adiciona se não existir a classe e remove se a classe existir no elemento
// titulo.classList.toggle("azul");

// // Verifica se classe existe dentro do elemento
// console.log(titulo.classList.contains("azul"));

function teste() {
  setTimeout(() => {
    alert("Cadastro realizado com sucesso");
  }, 2000);
}

// const title = document.getElementById("titulo-principal");

// console.log(title);
// // title.onclick = teste
// title.onclick = function () {
//   console.log("Cliquei no titulo 1");
// };
// title.onclick = function () {
//   console.log("Cliquei no titulo 2");
// };
// // Com o addEventListener é possivel acumular eventos enquanto que com o onclick não
// title.addEventListener("click", () => {
//   console.log("AddEventListener 1 ");
// });
// title.addEventListener("click", () => {
//   console.log("AddEventListener 2");
// });

// window.onload = function () {
//   console.log("Janela carregou");
// };

// const azul = document.getElementsByClassName("azul");
// console.log(azul);

// // azul[0].addEventListener("click", () => {
// //   alert("Primeiro elemento azul");
// // });

// for (let elem of azul) {
//   elem.addEventListener("click", () => {
//     alert("Primeiro elemento azul");
//   });
// }

// const title = document.querySelector("#titulo-principal");

// title.onmouseover = function () {
//   console.log("Mouse over");
//   title.classList.add("big");
//   document.getElementById("dropdown").style.display = "block";
// };
// title.onmouseout = function () {
//   console.log("Mouse out");
//   title.classList.remove("big");
//   document.getElementById("dropdown").style.display = "none";
// };
// // MENU SIDEBAR

// const menu = document.getElementById("icon-menu");
// menu.onclick = function () {
//   document.getElementById("sidebar").style.left = 0;
// };
// const sidebar = document.getElementById("sidebar");

// sidebar.onclick = function () {
//   document.getElementById("sidebar").style.left = "-200px";
// };

// const input = document.querySelector("#input-text");

// input.onkeydown = function (e) {
//   // console.log("Estou pressionando a tecla");
// };
// input.onkeypress = function () {
//   // console.log("Pressionei a tecla");
// };
// input.onkeyup = function (e) {
//   // console.log(e);
//   if (e.key === "a") {
//     alert("Não pode digitar a letra 'a'");
//     // console.log(input.value);
//     input.value = input.value.replace("a", "");
//   }
//   // console.log("Deixei de pressionar a tecla");
// };
// input.addEventListener("focusout", function () {
//   if (input.value.length < 8) {
//     console.log("Valor muito pequeno");
//     input.style.color = "red";
//     input.style.borderColor = "red";
//   }
// });
// input.addEventListener("focusin", function () {
//   input.style.color = "black";
// });

// let total = 0;
// const input1 = document.querySelector("#input-text-1");
// const input2 = document.querySelector("#input-text-2");
// const input3 = document.querySelector("#input-text-3");
// const result = document.querySelector("#total");

// input1.addEventListener("focusout", function (e) {
//   total += parseInt(input1.value);
//   result.innerText = total;
// });
// input2.addEventListener("focusout", function (e) {
//   total += parseInt(input2.value);
//   result.innerText = total;
// });
// input3.addEventListener("focusout", function (e) {
//   total += parseInt(input3.value);
//   result.innerText = total;
// });

// const input = document.getElementById("input-text");

// input.oninput = function (e) {
//   if (e.data === "a") {
//     alert("Não pode digitar a letra 'a'");
//     // console.log(input.value);
//     input.value = input.value.replace("a", "");
//   }
// };
