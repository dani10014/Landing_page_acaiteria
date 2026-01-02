let botoesAdicionarCarrinho = document.querySelectorAll(".adicionar-carrinho");
let blocoAlerta = document.querySelector(".alerta");
let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
let quantidade = [];
console.log(produtos)

botoesAdicionarCarrinho.forEach(button => {
    button.addEventListener("click", (event) => {
        blocoAlerta.classList.add("alerta-ativo")
        setTimeout(() => {
            blocoAlerta.classList.remove("alerta-ativo")
        }, 1000);
        
        let card = event.target.closest(".card");
        let produto = {
            imagem: card.querySelector("img").src,
            nome: card.querySelector(".card-title").innerText,
            preco: card.querySelector("#valor").innerText
        }
        produtos.push(produto)
        localStorage.setItem('carrinho', JSON.stringify(produtos));
    });
});

$(document).ready(function() {
    $(".carrosel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});