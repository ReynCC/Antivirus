function virus(texto){

    var textoModificado = "";

    for(let i = 0; i < texto.length; i++){

        if(texto[i] === texto[i + 1]){

            textoModificado += texto[i] + String.fromCharCode(texto.charCodeAt(i+1) + 1);

            i++; 

        } else {

            textoModificado = textoModificado + texto[i];

        }

    }

    return textoModificado;
    
}