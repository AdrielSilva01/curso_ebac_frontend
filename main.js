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
})

const valorUM = document.getElementById('nmr1');

const ValorDois = document.getElementById('nmr2');

const maiorMenor = ('nmr1' > 'nmr2')

if (maiorMenor === false) {

alert ("o segundo numero precisa ser maior que o primeiro");
}