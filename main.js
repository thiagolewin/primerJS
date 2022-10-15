const flexContainer = document.querySelector(".flex-container");

llaveNueva  = (nombre,modelo,precio)=> {    
    img = `<img src='llave.png'>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<p>${modelo}</p>`;
    precio = `<p>precio: <b>${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const fragmento = document.createDocumentFragment();

for (let i = 1; i<=20; i++) {
    let precio = Math.round(Math.random()*10+30);
    let modelo = Math.round(Math.random()*10000);
    
    const div = document.createElement("DIV");
    div.classList.add(`llave`,`llave${i}`);
    div.tabIndex = 0;
    let llave = llaveNueva(`llave: ${i}`,modelo,precio);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    if (precio > 36) {
        const parrafo = div.getElementsByTagName("p")[1];
        const negrita = parrafo.getElementsByTagName("b")[0];
        negrita.style.color = "red";
    }
    fragmento.appendChild(div);
}
flexContainer.appendChild(fragmento)