var calification = ["ana", "osvaldo", "raúl", "celia", "maría", "antonio"];

document.write("Premod: <br>"); 
document.write("-------------------- <br>")

for (i = 0; i < calification.length; i++){
  document.write(calification[i] + "<br>")
}

calification.unshift("marta")
document.write("<br>")


document.write("Modificada <br>")
document.write("-------------------- <br>")

for (i = 0; i < calification.length; i++){
  document.write(calification[i] + "<br>")
}