const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos(){

    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));
    for (const produto of produtosEscondidos) {
        produto.classList.remove('hidden');
    }

}

function esconderMasculinos(){
    exibirTodos();
    const produtoMasculinos = Array.from(catalogoProdutos.getElementsByClassName('masculino'));
    for (const produto of produtoMasculinos) {
        produto.classList.add('hidden');
    }
}

function esconderFeminino(){
    exibirTodos();
    const produtoFemininos = Array.from(catalogoProdutos.getElementsByClassName('feminino'));
    for (const produto of produtoFemininos) {
        produto.classList.add('hidden');
    }
}

export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click',()=>{
        exibirTodos();
    });
    document.getElementById('exibir-masculinos').addEventListener('click',()=>{
        esconderFeminino();
    });
    document.getElementById('exibir-femininos').addEventListener('click',()=>{
        esconderMasculinos();
    });
}