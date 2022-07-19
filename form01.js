function criaElemento(cor, largura, altura)
{
    const eNovo = document.createElement("div");
    eNovo.textContent = `${cor} ${altura} ${largura}`;
    document.body.appendChild(eNovo);

}

criaElemento(
    document.exm01.cor.value,
    document.exm01.altura.value,
    document.exm01.largura.value
)