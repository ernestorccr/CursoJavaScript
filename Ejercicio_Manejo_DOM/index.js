 
document.write("<br><h2> Resultados de análisis </h3><br>")

document.write("<em>El número de links existentes es " + document.links.length + ".</em>");
  
  
const links = document.getElementsByTagName("a")
const thirdparagraph = document.getElementById("third-paragraph").getElementsByTagName("a")
 
 
const parrafo3 = document.createElement("p")
parrafo3.innerHTML = ( "<em> Direccion a la que enlaza el penultimo link es <a href='" + links[(links.length - 2)] + "'>" + links[(links.length - 2)] + "</a>. </em>")
document.body.append(parrafo3) 

const parrafo4 = document.createElement("p")
parrafo4.innerHTML = ( "<em> El numero de links del tercer parrafo es " + thirdparagraph.length + " links.</em>")
document.body.append(parrafo4)


