let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
let container = document.getElementById("lista-produtos");

console.log(produtos)

produtos.forEach(produto => {
    let html =`<div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                        <div class="card-body">
                        <div class="row align-items-center">
                                    <div class="col-4">
                                    <img src="${produto.imagem}" class="img-fluid" style="height: 140px; object-fit: contain;">
                                    </div>
                                    <div class="col-8">
                                    <h5 class="card-title">${produto.nome}</h5>
                                    <ul>
                                        <li>Banana</li>
                                        <li>Morango</li>
                                        <li>Kiwi</li>
                                    </ul>
                                    <h5 class="text-center mb-3" id="valor">${produto.preco}</h5>
                                    <div class="valor-e-quantidade d-flex justify-content-between align-items-center">
                                        <button class="btn btn-secondary">Menos</button>
                                        <span class="btn btn-info">1</span>
                                        <button class="btn btn-secondary">Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                    ;
                container.innerHTML += html;
});
    