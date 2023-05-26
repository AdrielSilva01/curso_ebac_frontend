const form = document.getElementById('nmr');

function validaNome(nomecompleto){

const nomeCOMOarray = nomecompleto.split(' ');

return nomeCOMOarray.length >= 2;

}form.addEventListener("submit", function(e) {

e.preventDefault();

const nomeBeneficiario = document.getElementById('nome');

if (!validaNome(nomeBeneficiario.value)){

alert("insira o nome completo!");
}

const valorUM = document.getElementById('nmr1');
(!validaNome(valorUM.value))

const ValorDois = document.getElementById('nmr2');
(!validaNome(ValorDois.value))

const maiorMenor = valorUM.value < ValorDois.value

if (!maiorMenor) {

alert ("o segundo numero precisa ser maior que o primeiro");
}
else {
    alert('muito bem')
}
})

