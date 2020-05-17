var InfoPaciente = document.querySelectorAll(".paciente");
console.log(InfoPaciente);

var i;

for (i = 0; i < InfoPaciente.length ; i++){
    
    var paciente = InfoPaciente[i];

    var tdpeso = paciente.querySelector(".peso");
    var peso = tdpeso.textContent;
    console.log(peso)
                    
    var tdaltura = paciente.querySelector(".altura");
    var altura = tdaltura.textContent;
    console.log(altura)

    
    if(altura && peso != null){
        var conta = peso /(altura * altura);
        console.log(conta)
        var imc = paciente.querySelector(".imc"); 
        imc.textContent = conta.toFixed(2);
        console.log(imc)
    }

}  












