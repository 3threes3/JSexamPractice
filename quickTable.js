var data = new Array();

data[0] = new Array("Perico", "Nada", 40); 
data[1] = new Array("David", "Whatever", 33); 
data[2] = new Array("Ana", "Monfort", 8); 

var table = "<table border='1'><tr><th>Name</th><th>Lastname</th><th>Fav number</th>";

document.write(table);

for (let i = 0; i < data.length; i++){
  document.write("<tr>");
  for(let j = 0; j < data[i].length; j++){
    document.write("<td>" + data[i][j] + "</td>");
  }
  document.write("</tr>");
}

