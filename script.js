let iniciarBtn = document.querySelector('[data-botao="iniciar"]');
let pausarBtn = document.querySelector('[data-botao="pausar"]');
let resetarBtn = document.querySelector('[data-botao="resetar"]');
let display = document.querySelector('[data-display]');
let hora = 0;
let minuto = 0;
let segundo = 0;
let intervalo = 1000;

function iniciar(){
  iniciarBtn.innerHTML ='Iniciar'
  intervaloIniciar = setInterval(() => {
    segundo++;
    if (segundo == 60){
      segundo = 0;
      minuto++;
    }
    if (minuto == 60){
      minuto = 0;
      hora++;
    }
    const horaStr = hora < 10 ? '0' + hora : hora.toString();
    const minutoStr = minuto < 10 ? '0' + minuto : minuto.toString();
    const segundoStr = segundo < 10 ? '0' + segundo : segundo.toString();
    display.innerHTML = horaStr + ":" + minutoStr + ":" + segundoStr;
  },1000);
}
function pausar(){
  clearTimeout(intervaloIniciar);
  iniciarBtn.innerHTML = 'Continuar'
}
function resetarTudo(){
  segundo = 0;
  minuto = 0;
  hora = 0;
  display.innerHTML = segundo;
}



iniciarBtn.addEventListener('click', iniciar);
pausarBtn.addEventListener('click', pausar);
resetarBtn.addEventListener('click', resetarTudo);