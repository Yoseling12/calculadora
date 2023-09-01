let eje= document.getElementById('real');
let opt= document.querySelector('select');
let resul= document.getElementById('resultado');


let opcion=opcion.value;
function eleccion(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let res = parseFloat(document.getElementById('res').value);

    let opt2 = resul.document.g;
    if(opt2 === 'Suma'){
        let res =res + n2;
        resul.innerHTML = `${resultado}`;
    }else if(opt2 === 'resta'){
        let res =res - n2;
        resul.innerHTML = `${resultado}`;
    }else if(opt2 === 'multiplicacion'){
        let res =res * n2;
        resul.innerHTML = `${resultado}`;
    }else if(opt2 === 'division'){
        let res =res / n2;
        resul.innerHTML = `${resultado}`;
    }
}