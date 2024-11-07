// Código JavaScript para selecionar e armazenar em variáveis alguns elementos do HTML
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");
            

//  Código JS para alternar a barra lateral

 //Esse daqui faz com que, quando você ta no celular, e clica para abrir o botão de menu, ele coloca a classe "ativo"
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

//Já esse daqui, é para quando o menu lateral tiver aberto, e você clicar em qualquer lugar que não faça parte do menu lateral, ele vai fechar o menu lateral
body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});