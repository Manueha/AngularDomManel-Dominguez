export function yellowsubmarine(){
  document.getElementById("textgroc").style.color ='yellow'
}
export function  changeSize(){
  document.getElementById("midamodificar").width =100;
}
export function  countWord(){
  let textcomptador = document.getElementById("comptar").innerHTML
  let comptador = 0;
  for (let i = 0;i < textcomptador.length;i++){
    if (textcomptador[i]===" "){
      comptador++
    }
  }
  return comptador;
}
export function imagen() {

}


export function mostrarValors(){
  let nodeTitol = document.getElementById("resultats")
  nodeTitol.innerHTML = document.getElementById("llistaDesplegable").value
}
