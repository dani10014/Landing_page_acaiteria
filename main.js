let botoesAdicionarCarrinho = document.querySelectorAll(".adicionar-carrinho");
let blocoAlerta = document.querySelector(".alerta");
let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
let quantidade = [];
let produtoQueCliquei = document.querySelectorAll(".produto")
let fecharCardEscolhido = document.querySelector(".fechar-card");
let overlay = document.querySelector(".overlay");
let MensagemAberto = document.getElementById("aberto");
let modalMensagem = new bootstrap.Modal(document.getElementById("meuModal"));


function atualizarRelogio(){
    let dataAtual = new Date();

    let horaAtual = dataAtual.getHours(); 
    
    let relogioTexto = dataAtual.toLocaleTimeString("pt-BR", {hour: '2-digit', minute: '2-digit'});
    document.getElementById("horario").innerHTML = relogioTexto;

    if(horaAtual >= 12 && horaAtual < 22){
        modalMensagem.hide()
        MensagemAberto.classList.add("aberto-ativo");
        MensagemAberto.classList.remove("fechado-ativo");
        MensagemAberto.innerHTML = "Estamos abertos!";
    } else {
        modalMensagem.show()
        MensagemAberto.classList.remove("aberto-ativo");
        MensagemAberto.classList.add("fechado-ativo");
        MensagemAberto.innerHTML = "Estamos fechados!";
    }
}


setInterval(atualizarRelogio, 1000);

botoesAdicionarCarrinho.forEach(button => {
    button.addEventListener("click", (event) => {
        blocoAlerta.classList.add("alerta-ativo")
        event.stopPropagation();
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

produtoQueCliquei.forEach(card => {
    card.addEventListener("click", (event) => {

        if (event.target.classList.contains("slick-arrow")) {
            return;
        }
        event.stopPropagation();
        let cardEscolhido = event.target.closest(".card")
        cardEscolhido.classList.add("ativo-produto-apertado");
        fecharCardEscolhido.classList.add("btn-ativo-card");
        overlay.classList.add("ativo");
        $('.carrosel').slick('setPosition'); 
    })
});

fecharCardEscolhido.addEventListener("click", () => {
        let cardAtivo = document.querySelector(".ativo-produto-apertado");
        if(cardAtivo) cardAtivo.classList.remove("ativo-produto-apertado");
        fecharCardEscolhido.classList.remove("btn-ativo-card");
        overlay.classList.remove("ativo");
        $('.carrosel').slick('setPosition'); 
});

overlay.addEventListener("click", () => {
    let cardAtivo = document.querySelector(".ativo-produto-apertado");
    if(cardAtivo) cardAtivo.classList.remove("ativo-produto-apertado");
    fecharCardEscolhido.classList.remove("btn-ativo-card");
    overlay.classList.remove("ativo");
    $('.carrosel').slick('setPosition');
});

$(document).ready(function() {
    $(".carrosel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});