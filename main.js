let botoesAdicionarCarrinho = document.querySelectorAll(".adicionar-carrinho");
let blocoAlerta = document.querySelector(".alerta");



botoesAdicionarCarrinho.forEach(button => {
    button.addEventListener("click", () => {
        blocoAlerta.classList.add("alerta-ativo")
        setTimeout(() => {
            blocoAlerta.classList.remove("alerta-ativo")
        }, 1000);
    });
});