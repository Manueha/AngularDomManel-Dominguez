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
export function imagen (){
  let iemg = document.getElementById("imatge")
  iemg.innerHTML = '<img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/suriname-toad.jpg?w=710&h=472"></img>'
}
export function valorsDesplegable(desplegableId, divId) {
  let valors = document.getElementById(desplegableId);
  let div = document.getElementById(divId)

  for (let i = 0; i < valors.options.length; i++) {
    div.innerHTML = div.innerHTML + " " + valors.options[i].text + ",";
  }
}
